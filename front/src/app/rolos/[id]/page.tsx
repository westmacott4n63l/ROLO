'use client';

import { useParams } from 'next/navigation'; // Next.js 13 App Router
import React, { useState } from "react";
import { Box, Typography, Avatar, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

// Dados mock
const mockChats = [
  { id: 1, product: "Cadeira Gamer", user1: { id: 1, name: "John Doe", avatar: "/avatar_johndoe.jpg" }, user2: { id: 2, name: "Você", avatar: "/avatar_voce.jpg" }, status: "online" },
  { id: 2, product: "Produto 1", user1: { id: 3, name: "Ana Julia", avatar: "" }, user2: { id: 2, name: "Você", avatar: "/avatar_voce.jpg" }, status: "offline" }
];

const mockMessages: Record<number, Array<{ id: number; sender_id: number; content: string; status: string; created_at: string; self: boolean }>> = {
  1: [
    { id: 1, sender_id: 1, content: "Oi! Está disponível?", status: "sent", created_at: "21:00", self: false },
    { id: 2, sender_id: 2, content: "Sim, está sim 🙂", status: "delivered", created_at: "21:01", self: true },
    { id: 3, sender_id: 1, content: "Ótimo! Posso retirar hoje à noite?", status: "read", created_at: "21:02", self: false },
    { id: 4, sender_id: 2, content: "Pode sim, me avise quando chegar!", status: "delivered", created_at: "21:03", self: true },
  ],
  2: [
    { id: 1, sender_id: 3, content: "Olá!", status: "sent", created_at: "21:00", self: false },
    { id: 2, sender_id: 2, content: "Oi, Julia!", status: "delivered", created_at: "21:01", self: true }
  ],
};

export default function ChatView() {
  const params = useParams();
  const chatId = Number(params.id);

  // Busca os dados do chat e mensagens pelo id
  const chat = mockChats.find(c => c.id === chatId);
  const [messages, setMessages] = useState(mockMessages[chatId] ?? []);
  const [input, setInput] = useState("");

  if (!chat) {
    return (
      <Box sx={{ bgcolor: "#232428", minHeight: "100vh", px: 2, py: 3, maxWidth: 400, mx: "auto", color: "#fff" }}>
        <Typography variant="h6" sx={{ color: "#FE733B" }}>Chat não encontrado</Typography>
      </Box>
    );
  }

  const otherUser = chat.user1.name !== "Você" ? chat.user1 : chat.user2;

  // Handler para enviar mensagem
  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        sender_id: 2,
        content: input,
        status: "sent",
        created_at: "21:05",
        self: true,
      }
    ]);
    setInput("");
  };

  return (
    <Box sx={{
      bgcolor: "#232428",
      minHeight: "100vh",
      py: 2,
      px: 2,
      maxWidth: 400,
      mx: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    }}>
      {/* Cabeçalho do chat (dinâmico) */}
      <Box sx={{ mb: 2, pb: 1, borderBottom: "1px solid #FE733B", display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar src={otherUser.avatar || ""} />
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" sx={{ color: "#FE733B", fontWeight: "bold" }}>{chat.product}</Typography>
          <Typography variant="body2" sx={{ color: "#fff", fontWeight: 500 }}>{otherUser.name}</Typography>
        </Box>
        <Typography variant="body2" sx={{ color: "#fff" }}>{chat.status === "online" ? "Online" : "Offline"}</Typography>
      </Box>

      {/* Mensagens */}
      <Box sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        mb: 2,
        maxHeight: "68vh",
        overflowY: "auto"
      }}>
        {messages.map(msg => (
          <Box
            key={msg.id}
            sx={{
              display: 'flex',
              flexDirection: msg.self ? "row-reverse" : "row",
              alignItems: "flex-end"
            }}
          >
            <Avatar
              src={msg.self ? chat.user2.avatar : otherUser.avatar}
              sx={{
                width: 30,
                height: 30,
                ml: msg.self ? 1 : 0,
                mr: msg.self ? 0 : 1
              }}
            />
            <Box sx={{
              maxWidth: "75%",
              bgcolor: msg.self ? "#FE733B" : "#272A30",
              color: "#fff",
              p: 1.5,
              borderRadius: msg.self ? "16px 0 16px 16px" : "0 16px 16px 16px",
              fontSize: 15,
              wordBreak: "break-word",
              boxShadow: msg.self ? "0 1px 6px #FE733B33" : "none"
            }}>
              {msg.content}
              <Box sx={{ display: "flex", justifyContent: msg.self ? "flex-end" : "flex-start", mt: 0.5 }}>
                <Typography variant="caption" sx={{ color: "#dcdcdc" }}>{msg.created_at}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Campo de envio de mensagem */}
      <Box sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "#272A30",
        borderRadius: 2,
        px: 2,
        py: 1,
        mb: 1
      }}>
        <TextField
          variant="standard"
          placeholder="Digite sua mensagem..."
          sx={{ flex: 1, color: "#fff" }}
          InputProps={{
            disableUnderline: true,
            style: { color: "#fff" }
          }}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter") sendMessage();
          }}
        />
        <IconButton color="primary" onClick={sendMessage}>
          <SendIcon sx={{ color: "#FE733B" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
