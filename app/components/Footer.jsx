'use client';
import React, { useEffect } from 'react';
import { Box, Container, Typography, Link, IconButton, Stack, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';

const Footer = () => {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without reloading
          window.history.pushState({}, '', `#${targetId}`);
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <Box 
      component="footer" 
      sx={{ 
        mt: 8, 
        py: { xs: 4, md: 8 },
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* Logo Column */}
          <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ mb: 2 }}>
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={140} 
                height={50}
                style={{ objectFit: 'contain' }}
              />
            </Box>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'text.secondary',
                fontFamily: "'Poppins', sans-serif",
                lineHeight: 1.6
              }}
            >
              Travel the world with our curated experiences.
            </Typography>
          </Grid>

          {/* Quick Links Column */}
          <Grid item xs={6} md={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2,
                fontFamily: "'Volkhov', serif",
                fontSize: '1.25rem',
                fontWeight: 700
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {['destination', 'bookings', 'testimonial', 'agencies'].map((link) => (
                <Link
                  key={link}
                  href={`#${link}`}
                  sx={{
                    color: 'text.primary',
                    '&:hover': {
                      color: 'primary.main',
                      textDecoration: 'none'
                    }
                  }}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact Column */}
        <Grid item xs={6} md={3}>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 2,
              fontFamily: "'Volkhov', serif",
              fontSize: '1.25rem',
              fontWeight: 700
            }}
          >
            Contact
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              123 Main Street, Anytown USA
            </Typography>
            <Link href="tel:1234567890" sx={{ color: 'text.primary' }}>
              (123) 456-7890
            </Link>
            <Link 
              href="mailto:info@travelbooking.com" 
              sx={{ 
                color: 'text.primary',
                wordBreak: 'break-word'
              }}
            >
              info@travelbooking.com
            </Link>
          </Stack>
        </Grid>

        {/* Social Media Column */}
        <Grid item xs={12} md={3}>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 2,
              fontFamily: "'Volkhov', serif",
              fontSize: '1.25rem',
              fontWeight: 700,
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            Follow Us
          </Typography>
          <Stack 
            direction="row" 
            spacing={2} 
            sx={{ 
              justifyContent: { xs: 'center', md: 'flex-start' },
              '& .MuiSvgIcon-root': {
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'translateY(-2px)'
                }
              }
            }}
          >
            {[
              <FacebookIcon key="fb" />,
              <TwitterIcon key="tw" />,
              <InstagramIcon key="ig" />,
              <LinkedInIcon key="li" />
            ].map((Icon, index) => (
              <IconButton 
                key={index}
                color="inherit"
                sx={{ color: 'text.primary' }}
              >
                {Icon}
              </IconButton>
            ))}
          </Stack>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Box 
        sx={{ 
          mt: 4,
          pt: 4,
          borderTop: '1px solid',
          borderColor: 'divider',
          textAlign: 'center'
        }}
      >
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'text.secondary',
            fontFamily: "'Poppins', sans-serif"
          }}
        >
          &copy; {new Date().getFullYear()} Travel Booking. All rights reserved.
        </Typography>
      </Box>
    </Container>
  </Box>
)
};


export default Footer;