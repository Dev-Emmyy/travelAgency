'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { 
  Box, 
  Button, 
  TextField, 
  Typography,
  Link,
  InputAdornment,
  CircularProgress
} from '@mui/material';
import { Mail, Lock } from '@mui/icons-material';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getErrorMessage = (error) => {
    switch (error) {
      case "CredentialsSignin":
        return "Invalid email or password.";
      case "AccessDenied":
        return "Account not verified. Please check your email.";
      case "TooManyAttempts":
        return "Too many failed login attempts. Try again later.";
      default:
        return "An error occurred while logging in. Please try again.";
    }
  };

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
        setError(getErrorMessage(result.error));
      } else {
        window.location.href = '/';
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      {/* Form Section */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
          pt: 5,
          position: 'relative',
          background: 'linear-gradient(135deg, #F9F8F5 0%, #FFFFFF 100%)'
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', sm: '400px' },
            bgcolor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: 4,
            p: 4,
            boxShadow: '0 24px 48px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          <Box sx={{ 
            textAlign: 'center', 
            mb: 4,
            animation: 'fadeIn 0.6s ease'
          }}>
            <Typography variant="h4" sx={{ 
              fontFamily: "Product Sans",
              fontWeight: 700, 
              mb: 1,
              color: 'text.primary'
            }}>
              Welcome Back
            </Typography>
            <Typography variant="body1" sx={{ 
              fontFamily: "Product Sans",
              color: 'text.secondary',
              maxWidth: '300px',
              mx: 'auto'
            }}>
              Sign in to continue your journey
            </Typography>
          </Box>
          <Box 
            component="form" 
            onSubmit={handleSubmit}
            sx={{ 
              '& .MuiTextField-root': { 
                mb: 2,
                '& .MuiInputBase-root': {
                  borderRadius: '12px',
                  transition: '0.3s',
                  '&:hover:not(.Mui-focused)': {
                    backgroundColor: 'action.hover'
                  }
                }
              } 
            }}
          >
            <TextField
              fullWidth
              required
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail sx={{ color: 'text.secondary' }} />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              error={!!error}
            />
            <TextField
              fullWidth
              required
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: 'text.secondary' }} />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              error={!!error}
            />
            {error && (
              <Typography 
                color="error" 
                variant="body2" 
                className="shake-animation"
                sx={{ 
                  mt: 1,
                  textAlign: 'center',
                }}
              >
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
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
              {loading ? (
                <CircularProgress size={24} sx={{ color: 'white' }} />
              ) : (
                'Sign In'
              )}
            </Button>
            <Typography variant="body2" sx={{ 
              fontFamily: "Product Sans",
              textAlign: 'center', 
              mt: 3,
              color: 'text.secondary'
            }}>
              Don't have an account?{' '}
              <Link 
                href="/signup" 
                sx={{ 
                  color: 'orange',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                Create account
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Image Section */}
      <Box
        sx={{
          width: '50%',
          minHeight: '100vh',
          position: 'relative',
          display: { xs: 'none', md: 'block' },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))',
            zIndex: 1
          }
        }}
      >
        <Image
          src="/loginFrame.jpeg"
          alt="Travel"
          fill
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'center right'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 80,
            left: 40,
            zIndex: 2,
            color: 'white',
            maxWidth: '500px'
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Alkalami',
              fontWeight: 800,
              mb: 2,
              color: 'orange.main',
              letterSpacing: '-0.5px',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            TravelAgency
          </Typography>
          <Typography variant="h3" sx={{ 
            fontWeight: 400,
            mb: 2,
            fontFamily: "Product Sans",
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
          }}>
            Discover Your Next Adventure
          </Typography>
          <Typography variant="body1" sx={{ 
            fontSize: '1.1rem',
            lineHeight: 1.6,
            fontFamily: "Product Sans",
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)'
          }}>
            Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}