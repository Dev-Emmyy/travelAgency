// pages/signup.js
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Card,
  CardContent,
  Button,
  TextField,
  Typography,
  Divider,
  InputAdornment 
} from '@mui/material';
import { Mail, Lock } from '@mui/icons-material';


export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      router.push('/login');
    } catch (error) {
      console.error(error);
      alert(error.message || 'An error occurred');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'grey.50',
        p: 2,
      }}
    >
      <Card sx={{ maxWidth: 400, width: '100%', boxShadow: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Mail sx={{ color: 'orange', fontSize: 40, mb: 1 }} />
            <Typography 
            variant="h5" component="h1" fontWeight="bold" 
            sx={{fontFamily: "Product Sans",}}>
              Sign Up
            </Typography>
          </Box>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              fullWidth
              required
              margin="normal"
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              fullWidth
              required
              margin="normal"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              required
              margin="normal"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                py: 1.5,
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1rem',
                fontFamily: "Product Sans",
                textTransform: 'none',
                bgcolor: 'orange',
                '&:hover': {
                  bgcolor: 'darkorange',
                  boxShadow: '0 8px 24px rgba(255, 152, 0, 0.3)'
                },
                '&.Mui-disabled': {
                  bgcolor: 'action.disabledBackground'
                }
              }}
            >
              Sign Up
            </Button>
            <Typography variant="body2" align="center" mt={2}
            sx={{fontFamily: "Product Sans",}}>
              Already have an account?{' '}
              <a href="/login" style={{ textDecoration: 'none', color: 'orange' }}>
                Log in
              </a>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}