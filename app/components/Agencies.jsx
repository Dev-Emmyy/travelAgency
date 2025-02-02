import React from 'react'
import { Box, Typography, Button, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import Image from 'next/image'

const Agencies = () => {
    const agencies = [
    {
      icon: '/company1.png',
    },
    {
      icon: '/company2.png',
    },
    {
      icon: '/company3.png',
    },
    {
      icon: '/company4.png',
    },
    {
      icon: '/company5.png',
    }
  ];

  return (
  <Box sx={{ mt: 5, fontFamily: "'Poppins', sans-serif" }}>
    {/* Agencies Grid */}
    <Box 
      sx={{
        mb: 6,
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(5, 1fr)'
        },
        gap: 3,
        px: 2,
        maxWidth: 1200,
        margin: '0 auto'
      }}
    >
      {agencies.map((agency, index) => (
        <Box 
          key={index} 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 1,
            opacity: 0.8,
            transition: 'all 0.3s ease',
            '&:hover': {
              opacity: 1,
              transform: 'scale(1.05)'
            }
          }}
        >
          <Image
            src={agency.icon}
            alt={`${agency.name} logo`}
            width={150}
            height={80}
            style={{ 
              width: '100%',
              height: 'auto',
              maxWidth: 150,
              objectFit: 'contain'
            }}
          />
        </Box>
      ))}
    </Box>

    {/* Subscription Card */}
    <Box 
      sx={{
        bgcolor: '#6246E5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: { xs: 3, sm: 4, md: 6 },
        borderRadius: 4,
        mx: { xs: 2, sm: 4 },
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 16px 40px rgba(98,70,229,0.3)'
      }}
    >
      {/* Floating Icon */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: -20, sm: -30 },
          right: { xs: -20, sm: -30 },
          width: { xs: 60, sm: 80 },
          height: { xs: 60, sm: 80 },
          bgcolor: '#705BFA',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 3
        }}
      >
        <SendIcon 
          sx={{ 
            color: 'white', 
            fontSize: { xs: 28, sm: 35 } 
          }} 
        />
      </Box>

      <Typography 
        sx={{
          color: 'white',
          fontWeight: 600,
          fontSize: { xs: '20px', sm: '24px', md: '28px' },
          textAlign: 'center',
          mb: 3,
          maxWidth: 800,
          lineHeight: 1.3,
          position: 'relative',
          zIndex: 1
        }}
      >
        Subscribe for latest travel updates & exclusive offers
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          width: '100%',
          maxWidth: 600,
          position: 'relative',
          zIndex: 1
        }}
      >
        <TextField
          fullWidth
          variant="filled"
          placeholder="Enter your email"
          InputProps={{
            disableUnderline: true,
            sx: {
              bgcolor: 'white',
              borderRadius: '8px',
              p: 1,
              fontSize: { xs: '14px', sm: '16px' },
              '& .MuiInputBase-input': {
                p: { xs: '8px', sm: '10px' }
              }
            }
          }}
        />
        <Button 
          variant="contained"
          sx={{
            bgcolor: '#FF7D68',
            color: 'white',
            fontSize: { xs: '14px', sm: '16px' },
            fontWeight: 600,
            borderRadius: '8px',
            p: { xs: '10px 20px', sm: '12px 32px' },
            minWidth: { sm: 140 },
            '&:hover': {
              bgcolor: '#FF6B4E',
              boxShadow: '0 4px 12px rgba(255,125,104,0.4)'
            }
          }}
        >
          Subscribe
        </Button>
      </Box>

      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -50,
          left: -50,
          width: 200,
          height: 200,
          bgcolor: 'rgba(255,255,255,0.1)',
          borderRadius: '50%'
        }}
      />
    </Box>
  </Box>
 )
}
export default Agencies