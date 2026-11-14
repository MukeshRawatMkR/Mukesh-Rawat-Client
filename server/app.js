import "dotenv/config";
import express from "express";
import { rateLimit } from "express-rate-limit";
import helmet from "helmet";
import { neon } from "@neondatabase/serverless";
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

  try {
    const sql = neon(process.env.DATABASE_URL);
    await sql`
      INSERT INTO contact_messages (name, email, message)
      VALUES (${parsed.data.name}, ${parsed.data.email}, ${parsed.data.message})
    `;

    return response.status(201).json({
      message: "Your message has been received.",
    });
  } catch (error) {
    console.error("Failed to save contact message:", error);
    return response.status(500).json({
      error: "Your message could not be saved. Please try again later.",
    });
  }
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
