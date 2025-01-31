'use client';
import { useState } from 'react';
import { Box, IconButton, Drawer, List, ListItem, useMediaQuery, Button } from '@mui/material';
import { Menu, Close, ExitToApp } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  const getFirstName = (name) => {
    if (!name) return 'User';
    return name.split(' ')[0];
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/login' });
    closeMenu();
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#212832',
    fontWeight: 'bold',
    fontFamily: "'Product Sans', sans-serif",
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#f5f5f5',
      transform: 'translateY(-2px)'
    }
  };

  const welcomeStyle = {
    textDecoration: 'none',
    color: '#FF6F00', // Changed to orange
    fontWeight: 'bold',
    fontFamily: "'Product Sans', sans-serif",
    padding: '8px 16px',
    backgroundColor: '#FFF3E0', // Changed to orange tint
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '&:hover': {
      backgroundColor: '#FFE0B2', // Darker orange tint
    }
  };

  const navItems = [
    { name: 'Destination', href: '#destination' },
    { name: 'Bookings', href: '#bookings' },
    { name: 'Testimonials', href: '#testimonial' },
    { name: 'Agencies', href: '#agencies' }
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: "Product Sans",
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

      {/* Mobile Section */}
      {isMobile && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {status === 'authenticated' && (
            <Box component={Link} href="/profile" sx={welcomeStyle}>
              👋 {getFirstName(session?.user?.name)}
            </Box>
          )}
          <IconButton
            sx={{ color: '#212832' }}
            onClick={toggleMenu}
            aria-label="menu"
          >
            <Menu fontSize="large" />
          </IconButton>
        </Box>
      )}

      {/* Desktop Navigation */}
      {!isMobile && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {status === 'authenticated' && (
            <Box component={Link} href="/profile" sx={welcomeStyle}>
              👋 Welcome {getFirstName(session?.user?.name)}
            </Box>
          )}
          {navItems.map((item) => (
            <Box key={item.name} component={Link} href={item.href} sx={linkStyle}>
              {item.name}
            </Box>
          ))}
          <Button
            onClick={handleSignOut}
            sx={{
              ...linkStyle,
              color: '#d32f2f',
              '&:hover': { backgroundColor: '#ffebee' }
            }}
          >
            Sign Out
          </Button>
        </Box>
      )}

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={closeMenu}
        PaperProps={{
          sx: {
            width: '70%',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            position: 'fixed',
            overflow: 'hidden',
            '& .MuiBackdrop-root': {
              backgroundColor: 'transparent'
            }
          }
        }}
      >
        <Box sx={{ position: 'relative', height: '100%' }}>
          <IconButton 
            onClick={closeMenu} 
            sx={{ 
              position: 'absolute',
              right: 16,
              top: 16,
              zIndex: 1
            }}
          >
            <Close fontSize="large" />
          </IconButton>
          <List sx={{ 
            pt: 8,
            display: 'flex', 
            flexDirection: 'column', 
            gap: 2,
            alignItems: 'center',
            '&& .MuiListItem-root': {
              padding: 0,
              width: '100%'
            }
          }}>
            {navItems.map((item) => (
              <ListItem key={item.name} sx={{ justifyContent: 'center' }}>
                <Box component={Link} href={item.href} sx={linkStyle} onClick={closeMenu}>
                  {item.name}
                </Box>
              </ListItem>
            ))}
            <ListItem sx={{ justifyContent: 'center' }}>
              <Button
                onClick={handleSignOut}
                sx={{
                  ...linkStyle,
                  color: '#d32f2f',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <ExitToApp /> Sign Out
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;