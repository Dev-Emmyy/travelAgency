'use client';
import { Box } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Destination from './components/Destination';
import Bookings from './components/Bookings';
import Testimonial from './components/Testimonial';
import Agencies from './components/Agencies';
import Footer from './components/Footer';

export default function Page() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  // Only show content if authenticated
  if (status === 'authenticated') {
    return (
      <Box
        sx={{
          backgroundColor: '#D5D6DB',
          minHeight: '100vh',
          paddingTop: '60px',
        }}
      >
        <Navbar/>
        <Box id="destination"><Destination/></Box>
        <Box id="bookings"><Bookings/></Box>
        <Box id="testimonial"><Testimonial/></Box>
        <Box id="agencies"><Agencies/></Box>
        <Footer/>
      </Box>
    );
  }

  return null;
}