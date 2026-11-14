import "dotenv/config";
import express from "express";
import { rateLimit } from "express-rate-limit";
import helmet from "helmet";
import { neon } from "@neondatabase/serverless";
import nodemailer from "nodemailer";
import { z } from "zod";

const app = express();
const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(1).max(5000),
}).strict();

const contactRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_request, response) => {
    response.status(429).json({
      error: "Too many messages. Please try again later.",
    });
  },
});

app.disable("x-powered-by");
app.set("trust proxy", 1);
app.use(helmet());
app.use(express.json({ limit: "10kb" }));

const submitContactMessage = async (request, response) => {
  const parsed = contactSchema.safeParse(request.body);

  if (!parsed.success) {
    return response.status(400).json({
      error: "Please provide a valid name, email address, and message.",
      fields: parsed.error.flatten().fieldErrors,
    });
  }

  if (!process.env.DATABASE_URL) {
    console.error("Contact API is missing the DATABASE_URL environment variable.");
    return response.status(503).json({
      error: "The contact service is temporarily unavailable.",
    });
  }

  const missingEmailSettings = [
    "GMAIL_USER",
    "GMAIL_APP_PASSWORD",
    "CONTACT_EMAIL",
  ].filter((key) => !process.env[key]?.trim());

  if (missingEmailSettings.length > 0) {
    console.error(
      `Contact API is missing email settings: ${missingEmailSettings.join(", ")}.`,
    );
    return response.status(503).json({
      error: "Email delivery is not configured. Please contact me directly.",
    });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    await sql`
      INSERT INTO contact_messages (name, email, message)
      VALUES (${parsed.data.name}, ${parsed.data.email}, ${parsed.data.message})
    `;
  } catch (error) {
    console.error("Failed to save contact message:", error);
    return response.status(500).json({
      error: "Your message could not be saved. Please try again later.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER.trim(),
        pass: process.env.GMAIL_APP_PASSWORD.replace(/\s/g, ""),
      },
    });
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER.trim()}>`,
      to: process.env.CONTACT_EMAIL.trim(),
      replyTo: parsed.data.email,
      subject: `New portfolio message from ${parsed.data.name.replace(/[\r\n]+/g, " ")}`,
      text: [
        `Name: ${parsed.data.name}`,
        `Email: ${parsed.data.email}`,
        "",
        "Message:",
        parsed.data.message,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return response.status(502).json({
      error: "Your message was saved, but its email notification could not be sent. Please do not submit it again.",
      saved: true,
    });
  }

  return response.status(201).json({
    message: "Your message has been received.",
  });
};

app.post(["/api/contact", "/"], contactRateLimit, submitContactMessage);
app.all(["/api/contact", "/"], (_request, response) => {
  response.set("Allow", "POST").status(405).json({
    error: "Method not allowed.",
  });
});

app.use((error, _request, response, next) => {
  if (response.headersSent) {
    return next(error);
  }

  const status = Number.isInteger(error.status) && error.status >= 400 && error.status < 500
    ? error.status
    : 500;

  if (status === 500) {
    console.error("Unhandled contact API error:", error);
  }

  return response.status(status).json({
    error: status === 413 ? "Request body is too large." : "Invalid request body.",
  });
});

export default app;
