import assert from "node:assert/strict";
import test from "node:test";
import { getAboutAssistantReply } from "../src/lib/about-assistant.js";

test("answers questions about listed web development skills", () => {
  const answer = getAboutAssistantReply("What does Mukesh specialize in?");

  assert.match(answer, /React/);
  assert.match(answer, /Node\.js/);
});

test("returns the HangMan project details and source link", () => {
  const answer = getAboutAssistantReply("Tell me about the HangMan game");

  assert.match(answer, /Tailwind CSS/);
  assert.match(answer, /github\.com\/MukeshRawatMkR/);
});

test("does not invent professional experience", () => {
  const answer = getAboutAssistantReply("How many years of work experience does he have?");

  assert.match(answer, /doesn’t list professional work history/);
  assert.match(answer, /swissmukeshrawat@gmail\.com/);
});

test("redirects unrelated questions to supported topics", () => {
  const answer = getAboutAssistantReply("What is the weather today?");

  assert.match(answer, /skills, projects, education, location/);
});
