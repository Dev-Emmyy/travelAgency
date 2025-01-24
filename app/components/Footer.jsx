'use client';
import React, { useEffect } from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import NextLink from 'next/link';
import Image from 'next/image';

const Footer = () => {
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

  return (
    <Box component="footer" sx={{mt: 8, py: 8, backgroundColor: '#f4f4f4'}}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Image src="/logo.png" alt="Logo" width={120} height={40} />
            <Typography variant="body2" color="text.secondary" mt={2}>
              Travel the world with our curated experiences.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <nav>
              <Link 
                component={NextLink} 
                href="#destination" 
                underline="hover" 
                color="inherit" 
                display="block" 
                mb={1}
              >
                Destinations
              </Link>
              <Link 
                component={NextLink} 
                href="#bookings" 
                underline="hover" 
                color="inherit" 
                display="block" 
                mb={1}
              >
                Bookings
              </Link>
              <Link 
                component={NextLink} 
                href="#testimonial" 
                underline="hover" 
                color="inherit" 
                display="block" 
                mb={1}
              >
                Testimonials
              </Link>
              <Link 
                component={NextLink} 
                href="#agencies" 
                underline="hover" 
                color="inherit" 
                display="block" 
                mb={1}
              >
                Agencies
              </Link>
            </nav>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={1}>
              123 Main Street, Anytown USA
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={1}>
              Phone: (123) 456-7890
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={1}>
              Email: info@travelbooking.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <Link href="#" underline="hover" color="inherit" mr={2}>
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#" underline="hover" color="inherit" mr={2}>
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" underline="hover" color="inherit" mr={2}>
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#" underline="hover" color="inherit" mr={2}>
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant="body2" color="text.secondary" align="center">
            &copy; 2024 Travel Booking. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;