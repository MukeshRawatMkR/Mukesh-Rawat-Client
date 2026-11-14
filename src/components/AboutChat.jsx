import { useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, RotateCcw, Send, Sparkles, X } from "lucide-react";
import { getAboutAssistantReply } from "@/lib/about-assistant.js";

const welcomeMessage = {
  id: "welcome",
  role: "assistant",
  content: "Hi! I’m Mukesh’s portfolio assistant. Ask me about his skills, projects, or background.",
};

const suggestedQuestions = [
  "What does Mukesh specialize in?",
  "Tell me about his projects",
  "How can I contact him?",
];

const AboutChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([welcomeMessage]);
  const [draft, setDraft] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, messages]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const startNewChat = () => {
    setMessages([welcomeMessage]);
    setDraft("");
  };

  const sendMessage = (message = draft) => {
    const content = message.trim();
    if (!content) return;

    const timestamp = `${Date.now()}-${Math.random()}`;
    setMessages((currentMessages) => [
      ...currentMessages,
      { id: `${timestamp}-user`, role: "user", content },
      {
        id: `${timestamp}-assistant`,
        role: "assistant",
        content: getAboutAssistantReply(content),
      },
    ].slice(-12));
    setDraft("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  return (
    <>
      {isOpen && (
        <section
          id="about-chat-panel"
          aria-labelledby="about-chat-title"
          aria-modal="false"
          className="fixed inset-x-3 bottom-20 z-[70] flex h-[min(36rem,calc(100dvh-7rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background text-foreground shadow-2xl sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[min(24rem,calc(100vw-3rem))]"
          role="dialog"
        >
          <header className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-3">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Bot size={21} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h2 id="about-chat-title" className="truncate text-base font-semibold">
                  Ask about Mukesh
                </h2>
                <p className="text-xs text-muted-foreground">Instant portfolio answers</p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                aria-label="Start a new chat"
                className="flex h-11 w-11 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
                onClick={startNewChat}
              >
                <RotateCcw size={17} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Close chat"
                className="flex h-11 w-11 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={() => setIsOpen(false)}
              >
                <X size={19} aria-hidden="true" />
              </button>
            </div>
          </header>

          <div
            aria-live="polite"
            className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-4"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[85%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "rounded-br-md bg-primary text-primary-foreground"
                      : "rounded-bl-md bg-muted text-foreground"
                  }`}
                >
                  {message.content}
                </p>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-col items-start gap-2 pl-1">
                <p className="text-xs font-medium text-muted-foreground">Try asking</p>
                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    className="min-h-11 max-w-full rounded-full border border-border px-3 py-2 text-left text-xs transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    onClick={() => sendMessage(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-border px-3 pb-3 pt-2">
            <p className="mb-2 px-1 text-[11px] leading-relaxed text-muted-foreground">
              Answers use this portfolio’s information. Chats stay in this browser session and aren’t sent to an AI service.
            </p>
            <form onSubmit={handleSubmit} className="flex items-end gap-2">
              <label className="sr-only" htmlFor="about-chat-input">
                Ask a question about Mukesh
              </label>
              <textarea
                id="about-chat-input"
                rows={1}
                maxLength={1000}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
                    handleSubmit(event);
                  }
                }}
                placeholder="Ask a question…"
                className="max-h-24 min-h-11 flex-1 resize-y rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
              />
              <button
                type="submit"
                aria-label="Send message"
                disabled={!draft.trim()}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send size={18} aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      )}

      <button
        type="button"
        aria-label={isOpen ? "Close chat" : "Chat about Mukesh"}
        aria-expanded={isOpen}
        aria-controls="about-chat-panel"
        onClick={() => setIsOpen((open) => !open)}
        className="fixed bottom-4 right-4 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {isOpen ? <X size={23} aria-hidden="true" /> : (
          <>
            <MessageCircle size={23} aria-hidden="true" />
            <Sparkles className="absolute right-2 top-2" size={11} aria-hidden="true" />
          </>
        )}
      </button>
    </>
  );
};

export default AboutChat;
