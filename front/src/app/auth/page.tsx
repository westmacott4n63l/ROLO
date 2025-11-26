/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Divider,
} from '@mui/material';
import {
  ArrowBack,
  PersonOutline,
  EmailOutlined,
  LockOutlined,
} from '@mui/icons-material';
import Link from 'next/link';

// Cores
const PRIMARY_ORANGE = '#FE733B';
const DARK_GRAY = '#232428';
const INPUT_BG = '#272A30';
const LIGHT_GRAY = '#dcdcdc';

const inputSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '0.75rem',
    backgroundColor: INPUT_BG,
    '& fieldset': { borderColor: '#444444' },
    '&:hover fieldset': { borderColor: PRIMARY_ORANGE },
    '&.Mui-focused fieldset': {
      borderColor: PRIMARY_ORANGE,
      borderWidth: '2px',
    },
    color: 'white',
  },
  '& .MuiInputBase-input::placeholder': {
    color: 'grey.600',
    opacity: 1,
  },
  '& .MuiInputLabel-root': { color: 'grey.400' },
};

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Lógica de login ou cadastro
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        backgroundColor: DARK_GRAY,
      }}
    >
      {/* --- LADO ESQUERDO (BRANDING) --- */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          height: { xs: 220, md: '100vh' },
          backgroundColor: PRIMARY_ORANGE,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: { xs: 'flex-start', md: 'center' },
          padding: 3,
          position: 'relative',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Botão Voltar */}
        <Box
          component={Link}
          href='/'
          sx={{
            position: 'absolute',
            top: { xs: 16, md: 32 },
            left: { xs: 16, md: 32 },
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'white',
            cursor: 'pointer',
            zIndex: 10,
            '&:hover': { opacity: 0.8 },
          }}
        >
          <ArrowBack sx={{ color: 'white' }} />
          <Typography variant='body1' sx={{ color: 'white', ml: 1 }}>
            voltar
          </Typography>
        </Box>

        {/* Logo e Título */}
        <Box
          sx={{
            marginTop: { xs: 4, md: 0 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component='img'
            src={'/logo_branca.svg'}
            alt='Rolo Logo'
            sx={{
              width: { xs: '50px', md: '120px' },
              marginBottom: 2,
            }}
          />
          <Typography
            variant='h3'
            sx={{
              color: 'white',
              fontWeight: 'bold',
              letterSpacing: '0.2em',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            ROLO
          </Typography>
          {/* Texto extra apenas desktop */}
          <Typography
            variant='subtitle1'
            sx={{
              display: { xs: 'none', md: 'block' },
              color: 'white',
              opacity: 0.8,
              mt: 1,
            }}
          >
            O melhor lugar para trocar suas ideias
          </Typography>
        </Box>
      </Box>

      {/* --- LADO DIREITO (FORMULÁRIO) --- */}
      <Box
        component='main'
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          // Efeito de "folha" subindo no mobile
          marginTop: { xs: -4, md: 0 },
          borderTopLeftRadius: { xs: '24px', md: 0 },
          borderTopRightRadius: { xs: '24px', md: 0 },
          backgroundColor: DARK_GRAY,
          padding: { xs: 3, md: 6 },
          zIndex: 2, // Garante que fique acima do laranja no mobile
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <Typography
            variant='h4'
            component='h1'
            sx={{
              color: 'white',
              fontWeight: 'bold',
              marginBottom: { xs: 3, md: 5 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {mode === 'register' ? 'Crie sua conta' : 'Login'}
          </Typography>

          <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            {/* Nome - Apenas Registro */}
            {mode === 'register' && (
              <Box>
                <Typography
                  variant='subtitle2'
                  sx={{ color: 'grey.300', mb: 0.5 }}
                >
                  Nome
                </Typography>
                <TextField
                  fullWidth
                  variant='outlined'
                  name='name'
                  placeholder='Digite seu nome'
                  value={formData.name}
                  onChange={handleChange}
                  sx={inputSx}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position='start'>
                          <PersonOutline sx={{ color: PRIMARY_ORANGE }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Box>
            )}

            {/* Email */}
            <Box>
              <Typography
                variant='subtitle2'
                sx={{ color: 'grey.300', mb: 0.5 }}
              >
                E-mail
              </Typography>
              <TextField
                fullWidth
                variant='outlined'
                type='email'
                name='email'
                placeholder='Digite seu email'
                value={formData.email}
                onChange={handleChange}
                sx={inputSx}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position='start'>
                        <EmailOutlined sx={{ color: PRIMARY_ORANGE }} />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>

            {/* Senha */}
            <Box>
              <Typography
                variant='subtitle2'
                sx={{ color: 'grey.300', mb: 0.5 }}
              >
                Senha
              </Typography>
              <TextField
                fullWidth
                variant='outlined'
                type='password'
                name='password'
                placeholder='Digite sua senha'
                value={formData.password}
                onChange={handleChange}
                sx={inputSx}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position='start'>
                        <LockOutlined sx={{ color: PRIMARY_ORANGE }} />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>

            {/* Confirmação - Apenas Registro */}
            {mode === 'register' && (
              <Box>
                <Typography
                  variant='subtitle2'
                  sx={{ color: 'grey.300', mb: 0.5 }}
                >
                  Confirmação de senha
                </Typography>
                <TextField
                  fullWidth
                  variant='outlined'
                  type='password'
                  name='confirmPassword'
                  placeholder='Confirme sua senha'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  sx={inputSx}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position='start'>
                          <LockOutlined sx={{ color: PRIMARY_ORANGE }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Box>
            )}

            {/* Esqueceu senha */}
            {mode === 'login' && (
              <Typography
                variant='body2'
                sx={{
                  color: PRIMARY_ORANGE,
                  textAlign: 'right',
                  cursor: 'pointer',
                  mt: -1,
                  '&:hover': { textDecoration: 'underline' },
                }}
                onClick={() => console.log('Recuperar senha')}
              >
                Esqueceu a senha?
              </Typography>
            )}

            <Button
              fullWidth
              type='submit'
              variant='contained'
              sx={{
                bgcolor: 'white',
                color: 'black',
                fontWeight: 'bold',
                py: 1.5,
                mt: 2,
                borderRadius: '0.75rem',
                '&:hover': { bgcolor: LIGHT_GRAY },
              }}
            >
              {mode === 'register' ? 'CADASTRAR' : 'ENTRAR'}
            </Button>
          </Box>

          <Divider sx={{ my: 3 }}>
            <Typography variant='body2' sx={{ color: PRIMARY_ORANGE }}>
              ou
            </Typography>
          </Divider>

          <Button
            fullWidth
            variant='contained'
            sx={{
              bgcolor: 'white',
              color: '#1f1f1f',
              fontWeight: 'bold',
              py: 1.5,
              borderRadius: '0.75rem',
              textTransform: 'none',
              '&:hover': { bgcolor: 'grey.100' },
            }}
            startIcon={
              <Box
                component='img'
                src={'/icon_google.png'}
                alt='G'
                sx={{ width: 20, height: 20 }}
              />
            }
          >
            Entrar com Google
          </Button>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant='body2' sx={{ color: 'grey.400' }}>
              {mode === 'register' ? 'Já tem conta? ' : 'Não tem conta? '}
              <Typography
                component='span'
                onClick={() =>
                  setMode(mode === 'register' ? 'login' : 'register')
                }
                sx={{
                  color: PRIMARY_ORANGE,
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                {mode === 'register' ? 'Fazer Login' : 'Cadastre-se'}
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
