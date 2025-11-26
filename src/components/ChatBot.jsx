import React, { useState } from "react";

export default function ChatBot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // ---- SMART BOT RESPONSES ---- //
  const botResponses = (userText) => {
    const text = userText.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
      return "👋 Hello! How can I assist you today?";
    }

    if (text.includes("order") || text.includes("status")) {
      return "📦 You can track your order in the 'My Orders' section. Want me to guide you?";
    }

    if (text.includes("refund")) {
      return "💰 Refunds are processed within 2–5 working days. Tell me your issue, I’ll help!";
    }

    if (text.includes("delivery") || text.includes("time")) {
      return "🚚 Delivery usually takes 20–40 minutes depending on your location.";
    }

    if (text.includes("coupon") || text.includes("discount")) {
      return "🎉 You can apply coupons during checkout. Need help finding available offers?";
    }

    if (text.includes("payment")) {
      return "💳 We support UPI, Card, Net Banking & Wallets. What issue are you facing?";
    }

    if (text.includes("help")) {
      return "Sure! Tell me what you're facing and I’ll guide you. 😊";
    }

    // default fallback
    return "I'm here to help! Could you please explain your issue in a bit more detail? 🙂";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const reply = botResponses(input);

    setInput("");

    setTimeout(() => {
      const botMsg = {
        sender: "bot",
        text: reply,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* CHAT POPUP */}
      {chatOpen && (
        <div className="mb-4 w-80 bg-white shadow-xl rounded-2xl overflow-hidden">

          {/* HEADER */}
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h2 className="font-semibold">Support Chat</h2>
            <button onClick={() => setChatOpen(false)}>✖</button>
          </div>

          {/* BODY */}
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <p className="text-gray-500 text-sm text-center">
                👋 Hi there! I’m your assistant. Ask anything!
              </p>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-xl max-w-[75%] text-sm ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* INPUT */}
          <div className="p-3 border-t flex gap-2 bg-gray-50">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 rounded-lg border"
            />
            <button
              onClick={sendMessage}
              className="px-4 bg-blue-600 text-white rounded-lg"
            >
              ➤
            </button>
          </div>

        </div>
      )}

      {/* CHAT FLOATING BUTTON */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 
                   shadow-lg flex items-center justify-center text-white 
                   text-3xl transition transform hover:scale-110"
      >
        💬
      </button>

    </div>
  );
}
 