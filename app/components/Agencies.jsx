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
    <Box sx={{mt: 5}}>
        <Box 
          sx={{
            mb: 6,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: { xs: 2, sm: 3, md: 4 }
        }}>
        {agencies.map((agency, index) => (
            <Box 
                key={index} 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: { xs: 100, sm: 120, md: 150 },
                    opacity: 0.6,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                        opacity: 1
                    }
                }}
            >
                <Image
                    src={agency.icon}
                    alt={`Company ${index + 1}`}
                    width={150}
                    height={80}
                    style={{ 
                        objectFit: 'contain',
                        maxWidth: '100%',
                        height: 'auto'
                    }}
                />
            </Box>
        ))}
    </Box>

    <Box 
      sx={{
        backgroundColor: "#6246E5",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: "24px 4px", sm: "64px 8px" },
        borderRadius: 4,
        maxWidth: 800,
        margin: 'auto',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      {/* Floating Paper Plane Icon */}
      <Box
        sx={{
          position: 'absolute',
          top: -30,
          right: -20,
          width: 70,
          height: 70,
          backgroundColor: '#705BFA',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          zIndex: 10
        }}
      >
        <SendIcon 
          sx={{ 
            color: 'white', 
            fontSize: 35 
          }} 
        />
      </Box>

      <Typography 
        sx={{
          color: "white",
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: { xs: '16px', sm: '18px' },
          textAlign: 'center',
          mb: 3,
          maxWidth: 500
        }}
      >
        Subscribe to get information, latest news and other interesting offers about Jadoo
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          width: '100%',
          maxWidth: 500
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Your email"
          sx={{
            backgroundColor: 'white',
            borderRadius: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              backgroundColor: 'white'
            }
          }}
        />
        <Button 
          sx={{
            backgroundColor: "#FF7D68",
            color: "#FFFFFF",
            fontSize: { xs: '12px', sm: '14px' },
            fontWeight: 600,
            fontFamily: "'Open Sans', sans-serif",
            borderRadius: 2,
            p: { xs: 1, sm: 1.5 },
            '&:hover': {
              backgroundColor: "#FF6B4E"
            }
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
   </Box>
  )
}

export default Agencies