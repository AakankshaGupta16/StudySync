import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import AnimatedBackdrop from "../components/AnimatedBackdrop";
import TailwindCalendar from "../components/TailwindCalendar";
import TodoList from "../components/TodoList";
import PomodoroTimer from "../components/PomodoroTimer";
import DocumentViewer from "../components/Documentviewer";
import AIChatBox from "../components/AIChatbox";
import SpotifyPlayer from "../components/SpotifyPlayer";
import { Avatar, AvatarGroup, TextField, Button, List, ListItem, ListItemText } from "@mui/material";
import dayjs from "dayjs";

const GroupStudy = () => {
  const [mode, setMode] = useState("focus");
  const [isHovered, setIsHovered] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const members = [
    { name: "Alice", avatar: "https://i.pravatar.cc/150?img=1" },
    { name: "Bob", avatar: "https://i.pravatar.cc/150?img=2" },
    { name: "Charlie", avatar: "https://i.pravatar.cc/150?img=3" },
  ];

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages((prev) => [...prev, { text: newMessage, sender: "You" }]);
      setNewMessage("");
    }
  };

  // Constants for widths in px
  const sidebarWidth = isHovered ? 256 : 80; // w-64 = 256px, w-20 = 80px
  const chatWidth = 384; // w-96 = 384px

  return (
    <div className="relative min-h-screen overflow-hidden flex">
      <AnimatedBackdrop mode={mode} />

      {/* Sidebar */}
      <div
        className={`transition-all duration-300`}
        style={{ width: sidebarWidth }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Sidebar setMode={setMode} mode={mode} isHovered={isHovered} />
      </div>

      {/* Main content and top bar */}
      <div
        className="flex flex-col flex-grow"
        style={{ marginRight: chatWidth }}
      >
        {/* Fixed top bar */}
        <div
          className="fixed top-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-black/50 backdrop-blur-lg border-b border-white/20 transition-all duration-300"
          style={{ left: sidebarWidth, right: chatWidth }}
        >
          <h1 className="text-3xl font-bold text-white font-mono drop-shadow-md">
            Group Study
          </h1>
          <div className="w-[360px]">
            <PomodoroTimer compact />
          </div>
        </div>

        {/* Content below top bar */}
        <div className="pt-24 px-6 flex flex-col gap-6 overflow-auto" style={{ height: "calc(100vh - 96px)" }}>
          <div className="flex gap-6">
            <div style={{ width: 260 }}>
              <TailwindCalendar
                selectedDate={selectedDate}
                onDateSelect={setSelectedDate}
              />
            </div>

            <div className="flex-1 bg-white/15 backdrop-blur-lg rounded-3xl p-6 text-white shadow-lg border border-white/20">
              <TodoList selectedDate={selectedDate} />
            </div>
          </div>

          <SpotifyPlayer embedUrl="https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS?utm_source=generator" />

          <DocumentViewer />
        </div>
      </div>

      {/* Group Chat panel fixed right */}
      <div
        className="fixed top-24 right-0 w-96 h-[calc(100vh-6rem)] flex flex-col bg-white/40 backdrop-blur-lg rounded-l-3xl p-6 shadow-xl"
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold tracking-wide text-gray-800">Room XXX</h2>
            <p className="text-sm text-gray-600">{members.length} Members</p>
          </div>
          <AvatarGroup max={4}>
            {members.map((member, idx) => (
              <Avatar key={idx} alt={member.name} src={member.avatar} />
            ))}
          </AvatarGroup>
        </div>

        {/* Chat messages */}
        <List className="flex-1 overflow-y-auto mb-4 bg-white rounded-lg p-2 shadow-inner">
          {messages.map((msg, idx) => (
            <ListItem key={idx}>
              <ListItemText primary={`${msg.sender}: ${msg.text}`} />
            </ListItem>
          ))}
        </List>

        {/* Input */}
        <div className="flex gap-2">
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="bg-white rounded"
            size="small"
          />
          <Button variant="contained" color="primary" onClick={handleSend} className="rounded">
            Send
          </Button>
        </div>
      </div>

      {/* AI Chatbox */}
      <AIChatBox />
    </div>
  );
};

export default GroupStudy;
