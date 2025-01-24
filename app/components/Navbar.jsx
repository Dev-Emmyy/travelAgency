'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const Navbar = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.slice(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

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
    color: '#1976d2',
    fontWeight: 'bold',
    fontFamily: "'Product Sans', sans-serif",
    padding: '8px 16px',
    backgroundColor: '#e3f2fd',
    borderRadius: '20px',
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
        position: 'sticky',
        top: 0,
        zIndex: 1000
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
        {[
          { name: 'Destination', href: '#destination' },
          { name: 'Bookings', href: '#bookings' },
          { name: 'Testimonials', href: '#testimonial' },
          { name: 'Agencies', href: '#agencies' }
        ].map((item) => (
          <Box
            key={item.name}
            component={Link}
            href={item.href}
            sx={linkStyle}
          >
            {item.name}
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