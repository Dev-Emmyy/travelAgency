// app/login/page.tsx
'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Button, 
  TextField, 
  Typography, 
  Divider,
  IconButton,
  InputAdornment 
} from '@mui/material';
import { Mail, Lock, Google } from '@mui/icons-material';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else if (result?.ok) {
        window.location.href = '/';
      }
    } catch (error) {
      setError('An error occurred during login');
    } finally {
      setLoading(false);
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
        p: 2
      }}
    >
      <Card sx={{ maxWidth: 400, width: '100%', boxShadow: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Mail sx={{ color: 'orange', fontSize: 40, mb: 1 }} />
            <Typography variant="h5" component="h1" fontWeight="bold">
              Login
            </Typography>
          </Box>

          {error && (
            <Typography color="error" textAlign="center" mb={2}>
              {error}
            </Typography>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                mb: 2,
                bgcolor: 'orange',
                '&:hover': {
                  bgcolor: 'darkorange',
                },
              }}
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Login'}
            </Button>

            <Box sx={{ position: 'relative', my: 3 }}>
              <Divider>
                <Typography variant="body2" sx={{ px: 2, color: 'text.secondary' }}>
                  OR
                </Typography>
              </Divider>
            </Box>

            <Button
              fullWidth
              variant="outlined"
              onClick={() => signIn('google', { callbackUrl: '/' })}
              startIcon={<Google />}
            >
              Sign in with Google
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}