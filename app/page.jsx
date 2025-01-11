'use client';

import { Box } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Destination from './components/Destination';

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
          width: '100%',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        <Navbar/>
        <Destination/>
      </Box>
    );
  }

  return null; // Redirecting unauthenticated users
}
