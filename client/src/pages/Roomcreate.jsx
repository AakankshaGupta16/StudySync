import React, { useState } from "react";
import PomodoroTimer from "../components/PomodoroTimer";
import DocumentViewer from "../components/Documentviewer";
import { Avatar, AvatarGroup, TextField, Button, List, ListItem, ListItemText } from "@mui/material";
import { useLocation } from "react-router-dom";

const Roomcreate = () => {
  const location = useLocation();
  const { roomCode, members: totalMembers } = location.state || {};
  
  const members = [
    { name: "Alice", avatar: "https://i.pravatar.cc/150?img=1" },
    { name: "Bob", avatar: "https://i.pravatar.cc/150?img=2" },
    { name: "Charlie", avatar: "https://i.pravatar.cc/150?img=3" },
  ];

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages((prev) => [...prev, { text: newMessage, sender: "You" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <div className="w-full bg-white shadow-md p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          📚 Study Room: {roomCode || "Group Alpha"}
        </h2>
        <AvatarGroup max={4}>
          {members.map((member, index) => (
            <Avatar key={index} alt={member.name} src={member.avatar} />
          ))}
        </AvatarGroup>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left: Study Material + Pomodoro */}
        <div className="w-3/4 p-4 space-y-6 overflow-y-auto">
          <div className="bg-white shadow-md rounded-xl p-4">
            <h3 className="text-lg font-bold mb-2">Live Study Material</h3>
            <DocumentViewer />
          </div>
          <div className="bg-white shadow-md rounded-xl p-4">
            <h3 className="text-lg font-bold mb-2">Pomodoro Session</h3>
            <PomodoroTimer />
          </div>
        </div>

        {/* Right: Chat */}
        <div className="w-1/4 bg-white border-l p-4 flex flex-col">
          <h3 className="text-lg font-bold mb-2">💬 Live Chat</h3>

          <div className="flex-1 overflow-y-auto mb-2 border rounded-md p-2">
            <List>
              {messages.map((msg, index) => (
                <ListItem key={index}>
                  <ListItemText primary={msg.text} secondary={msg.sender} />
                </ListItem>
              ))}
            </List>
          </div>

          <div className="flex gap-2">
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Type your message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <Button variant="contained" onClick={handleSend}>
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roomcreate;
