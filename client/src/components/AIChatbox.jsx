import React, { useState } from 'react';

// AIChatbox Component
const AIChatbox = ({ closeChat }) => {
  const [messages, setMessages] = useState([
    {
      text: 'Hi there! Need help with something?',
      sender: 'assistant',
    },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');

    // Simulated bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: 'This is a sample AI response.\nYou can connect to OpenAI later!',
          sender: 'assistant',
        },
      ]);
    }, 800);
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 h-96 bg-white/90 text-black rounded-xl shadow-2xl border border-gray-300 backdrop-blur-sm flex flex-col overflow-hidden z-50">
      {/* Header */}
      <div className="bg-[#1e1e2f] text-white p-3 font-semibold flex justify-between items-center">
        Assistant
        <button
          className="text-white hover:text-red-400"
          onClick={closeChat} // Calls the closeChat function passed as prop
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-transparent">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`px-3 py-2 rounded-lg w-fit max-w-full break-words ${
              msg.sender === 'user'
                ? 'ml-auto bg-green-100 text-black'
                : 'bg-blue-100 text-black'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-2 border-t border-gray-200 bg-white flex items-center gap-2">
        <input
          type="text"
          placeholder="Ask something..."
          className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

// ChatToggleButton Component
const ChatToggleButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Fancy Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white p-4 rounded-full shadow-xl hover:scale-105 transform transition-all duration-300 z-50"
      >
        AI Assistance
      </button>

      {/* Chatbox */}
      {isChatOpen && <AIChatbox closeChat={toggleChat} />}
    </div>
  );
};

export default ChatToggleButton;
