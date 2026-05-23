import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { Link } from "@tanstack/react-router";
import { chatWithAssistant } from "@/lib/chat.functions";

type Msg = { role: "user" | "assistant"; content: string; ts: number };

const STORAGE_KEY = "naingate.chat.v1";

const WELCOME: Msg = {
  role: "assistant",
  content:
    "Hi 👋 I'm Nai, your Naingate Insurance assistant. Ask me about products, claims, pricing or sponsorship — I'm here 24/7.",
  ts: Date.now(),
};

const QUICK_REPLIES = [
  { label: "Claims", text: "How do I file a claim?" },
  { label: "Products", text: "What insurance products do you offer?" },
  { label: "Pricing", text: "How much does motor insurance cost?" },
  { label: "Contact", text: "How can I speak to an agent?" },
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const send = useServerFn(chatWithAssistant);

  // Load history
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Msg[];
        if (Array.isArray(parsed) && parsed.length) setMessages(parsed);
      }
    } catch {}
  }, []);

  // Persist
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-50)));
    } catch {}
  }, [messages]);

  // Autoscroll
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  // Focus on open
  useEffect(() => {
    if (open) {
      setUnread(false);
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [open]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    const userMsg: Msg = { role: "user", content: trimmed, ts: Date.now() };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const { reply } = await send({
        data: { messages: next.map(({ role, content }) => ({ role, content })) },
      });
      setMessages((m) => [...m, { role: "assistant", content: reply, ts: Date.now() }]);
      if (!open) setUnread(true);
    } catch (e) {
      console.error(e);
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "I had trouble reaching the network. Please try again, or visit the Contact page to message our team.",
          ts: Date.now(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        aria-label="Open chat with Naingate assistant"
        onClick={() => setOpen((v) => !v)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 220, damping: 18 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 z-[60] h-14 w-14 rounded-full bg-navy text-navy-foreground shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] ring-1 ring-gold/40 flex items-center justify-center"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
        {unread && !open && (
          <span className="absolute top-1 right-1 h-3 w-3 rounded-full bg-gold ring-2 ring-background" />
        )}
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            className="fixed z-[60] bottom-24 right-4 left-4 sm:left-auto sm:right-5 sm:bottom-24 sm:w-[380px] max-h-[78vh] flex flex-col rounded-2xl overflow-hidden border border-border bg-card shadow-2xl"
          >
            {/* Header */}
            <div className="relative bg-navy text-navy-foreground px-4 py-3 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gold/20 ring-1 ring-gold/40 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-gold" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold leading-tight">Naingate Assistant</div>
                <div className="text-[11px] text-navy-foreground/70 flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Online · usually replies instantly
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="p-1.5 rounded-md hover:bg-white/10">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-3 py-4 space-y-2"
              style={{
                background:
                  "linear-gradient(180deg, color-mix(in oklab, var(--muted) 60%, transparent), var(--background))",
              }}
            >
              {messages.map((m, i) => (
                <Bubble key={i} msg={m} />
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm">
                    <Typing />
                  </div>
                </div>
              )}
            </div>

            {/* Quick replies */}
            {messages.length <= 2 && !loading && (
              <div className="px-3 pb-2 flex flex-wrap gap-1.5">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q.label}
                    onClick={() => sendMessage(q.text)}
                    className="text-xs px-3 py-1.5 rounded-full border border-border bg-background hover:bg-muted transition"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="border-t border-border bg-background p-2 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message…"
                className="flex-1 bg-muted/60 rounded-full px-4 h-10 text-sm outline-none focus:ring-2 focus:ring-gold/40"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send"
                className="h-10 w-10 rounded-full bg-navy text-navy-foreground flex items-center justify-center disabled:opacity-50 hover:bg-navy/90 transition"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <div className="px-3 pb-2 text-[10px] text-muted-foreground text-center">
              For binding quotes, please use the{" "}
              <Link to="/contact" className="underline hover:text-foreground" onClick={() => setOpen(false)}>
                Contact page
              </Link>
              .
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Bubble({ msg }: { msg: Msg }) {
  const isUser = msg.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] text-sm leading-relaxed px-3.5 py-2 shadow-sm whitespace-pre-wrap ${
          isUser
            ? "bg-navy text-navy-foreground rounded-2xl rounded-br-sm"
            : "bg-card border border-border rounded-2xl rounded-bl-sm"
        }`}
      >
        {msg.content}
        <div className={`mt-0.5 text-[10px] ${isUser ? "text-navy-foreground/60" : "text-muted-foreground"} text-right`}>
          {new Date(msg.ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>
    </motion.div>
  );
}

function Typing() {
  return (
    <div className="flex items-center gap-1 h-4">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60"
          animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}
