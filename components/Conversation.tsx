import { FormEvent, useState } from "react";

type Entry = {
  role: "user" | "assistant";
  message: string;
};

const assistantResponses = [
  "Hey there! It's great to hear from you.",
  "Thanks for checking out this autonomous demo site.",
  "Feel free to tweak the greeting and see how I respond."
];

const getAssistantResponse = (userMessage: string) => {
  if (!userMessage.trim()) {
    return "Try saying something—anything! I'm all ears.";
  }
  const index = Math.abs(
    [...userMessage.toLowerCase()].reduce((hash, char) => hash + char.charCodeAt(0), 0)
  );
  return assistantResponses[index % assistantResponses.length];
};

export function Conversation() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = message.trim();
    const userEntry: Entry = { role: "user", message: trimmed || "(silence)" };
    const botEntry: Entry = { role: "assistant", message: getAssistantResponse(trimmed) };
    setEntries((prev) => [...prev, userEntry, botEntry]);
    setMessage("");
  };

  return (
    <div className="conversation-widget">
      <div className="conversation-widget__messages">
        {entries.length === 0 ? (
          <p className="conversation-widget__placeholder">Start the chat with your own hello!</p>
        ) : (
          entries.map((entry, index) => (
            <div key={`${entry.role}-${index}`} className={`message ${entry.role}`}>
              <span>{entry.message}</span>
            </div>
          ))
        )}
      </div>
      <form onSubmit={handleSubmit} className="conversation-widget__form">
        <input
          type="text"
          placeholder="Type your greeting..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-label="Greeting input"
        />
        <button type="submit" className="button primary">
          Send
        </button>
      </form>
    </div>
  );
}
