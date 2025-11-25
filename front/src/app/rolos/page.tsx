'use client';

import React, { useState } from 'react';
import { Box, Typography, Avatar, TextField, Chip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

// Dados mock de chats
const chats = [
  {
    id: 1,
    title: 'Cadeira Gamer',
    user: 'John Doe',
    userAvatar: '/avatar_johndoe.jpg',
    message: 'Quer trocar por uma placa de vídeo?',
    time: '21:00',
    status: 'sent',
    waiting: true,
    online: true,
  },
  {
    id: 2,
    title: 'Produto 1',
    user: 'Ana Julia',
    userAvatar: '',
    message: 'Imagens',
    time: '21:00',
    status: 'sent',
    waiting: true,
    online: true,
  },
];

export default function Rolos() {
  const [search, setSearch] = useState('');

  return (
    <Box
      sx={{
        bgcolor: '#232428',
        minHeight: '100vh',
        px: 2,
        py: 3,
        maxWidth: 400,
        mx: 'auto',
      }}
    >
      {/* Barra de pesquisa */}
      <Box
        sx={{
          bgcolor: '#272A30',
          borderRadius: 2,
          px: 2,
          py: 1,
          display: 'flex',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <SearchIcon sx={{ color: '#FE733B', mr: 1 }} />
        <TextField
          variant='standard'
          placeholder='lorem'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            disableUnderline: true,
            style: { color: '#fff' },
          }}
          sx={{ flex: 1 }}
        />
      </Box>

      {/* Título sessão */}
      <Typography
        variant='h6'
        sx={{ color: '#FE733B', mb: 2, fontWeight: 700 }}
      >
        ROLOS Em andamento
      </Typography>

      {/* Lista de chats */}
      {chats
        .filter((chat) =>
          chat.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((chat) => (
          <Link
            key={chat.id}
            href={`/rolos/${chat.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Box
              sx={{
                bgcolor: '#272A30',
                borderRadius: 2,
                mb: 2,
                px: 2,
                py: 2,
                display: 'flex',
                alignItems: 'flex-start',
                cursor: 'pointer',
                transition: '0.2s',
                '&:hover': {
                  boxShadow: '0 2px 16px #FE733B22',
                  bgcolor: '#232428',
                },
              }}
            >
              <Avatar
                src={chat.userAvatar || ''}
                alt={chat.user}
                sx={{
                  width: 44,
                  height: 44,
                  bgcolor: chat.userAvatar ? 'initial' : '#232428',
                  mr: 2,
                }}
              />
              <Box sx={{ flex: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 0.5,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography sx={{ color: '#fff', fontWeight: 600 }}>
                      {chat.user}
                    </Typography>
                    {/* Indicador online */}
                    {chat.online && (
                      <Box
                        sx={{
                          bgcolor: '#24F87A',
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                        }}
                      />
                    )}
                  </Box>
                  <Typography sx={{ color: '#fff', fontSize: 12 }}>
                    {chat.time}
                  </Typography>
                  <CheckCircleIcon
                    sx={{ color: '#FE733B', fontSize: 18, ml: 1 }}
                  />
                </Box>
                <Typography sx={{ color: '#FE733B', fontWeight: 600 }}>
                  {chat.title}
                </Typography>
                <Typography sx={{ color: '#fff', fontSize: 13 }}>
                  {chat.message}
                </Typography>
                {/* Chip de status aguardando */}
                {chat.waiting && (
                  <Chip
                    label='Aguardando sua resposta'
                    size='small'
                    sx={{
                      bgcolor: '#232428',
                      color: '#fff',
                      fontSize: 11,
                      mt: 1,
                      borderRadius: 1.5,
                      px: 1.5,
                    }}
                  />
                )}
              </Box>
            </Box>
          </Link>
        ))}
    </Box>
  );
}
