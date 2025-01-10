// app /page.tsx
'use client';
import { Box } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);


  // Only show content if authenticated
  if (session) {
    return (
      <Box sx={{backgroundColor : "#D5D6DB", minHeight : "100vh"}}>
        <h1 className="text-2xl font-bold">Welcome, {session.user?.name}</h1>
        {/* Your  content here */}
      </Box>
    );
  }

  // This return is optional as the useEffect will redirect
  return null;
}