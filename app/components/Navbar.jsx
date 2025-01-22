'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session, status } = useSession();

  const linkStyle = {
    textDecoration: 'none',
    color: '#212832',
    fontWeight: 'bold',
    fontFamily: "'Product Sans', sans-serif",
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    }
  };

  const welcomeStyle = {
    textDecoration: 'none',
    color: '#1976d2', // Different color for welcome message
    fontWeight: 'bold',
    fontFamily: "'Product Sans', sans-serif",
    padding: '8px 16px',
    backgroundColor: '#e3f2fd', // Light blue background
    borderRadius: '20px', // Rounded corners
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '&:hover': {
      backgroundColor: '#bbdefb',
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 24px',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      }}
    >
      {/* Logo Section */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Image src="/logo.png" alt="Logo" width={80} height={30} priority />
      </Box>

      {/* Navigation Links */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {status === 'authenticated' && session?.user && (
          <Box
            component={Link}
            href="/profile"
            sx={welcomeStyle}
          >
            👋 {session.user.name || 'User'}
          </Box>
        )}
        
        {['Destination', 'Bookings', 'Flights', 'Agencies'].map((item) => (
          <Box
            key={item}
            component={Link}
            href="/"
            sx={linkStyle}
          >
            {item}
          </Box>
        ))}

        <Box
          component={Link}
          href="/signout"
          sx={{
            ...linkStyle,
            color: '#d32f2f',
            '&:hover': {
              backgroundColor: '#ffebee',
            }
          }}
        >
          Sign Out
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;