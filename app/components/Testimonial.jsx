import { Box, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image';

const Testimonial = () => {
 return (
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'center',
      alignItems: 'center',
      gap: { xs: 4, md: 8 },
      p: { xs: 3, md: 6 },
      mt: 8,
      fontFamily: "'Poppins', sans-serif"
    }}
  >
    {/* Left Side - Text Content */}
    <Box 
      sx={{ 
        width: { xs: '100%', md: '50%' },
        maxWidth: 600,
        textAlign: { xs: 'center', md: 'left' }
      }}
    >
      <Typography 
        variant='h6'
        sx={{
          color: "#5E6282",
          fontSize: { xs: '14px', md: '16px' },
          fontWeight: 600,
          letterSpacing: 2,
          mb: 2,
          textTransform: 'uppercase'
        }}
      >
        Testimonials
      </Typography>

      <Typography 
        variant='h2'
        sx={{
          color: "#181E4B",
          fontSize: { xs: '32px', sm: '40px', md: '48px' },
          fontWeight: 700,
          fontFamily: "'Volkhov', serif",
          lineHeight: 1.2,
          mb: 3
        }}
      >
        What people say about Us
      </Typography>
    </Box>

    {/* Right Side - Testimonial Card */}
    <Box 
      sx={{
        width: { xs: '90%', md: '50%' },
        maxWidth: 500,
        position: 'relative',
        bgcolor: 'white',
        borderRadius: '24px',
        boxShadow: '0 24px 48px rgba(0,0,0,0.08)',
        overflow: 'visible',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: { md: 'translateY(-8px)' }
        }
      }}
    >
      {/* Profile Image */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: -25, md: -30 },
          left: { xs: 20, md: -15 },
          zIndex: 10,
          width: { xs: 60, md: 70 },
          height: { xs: 60, md: 70 },
          borderRadius: '50%',
          border: '3px solid white',
          boxShadow: 3,
          overflow: 'hidden'
        }}
      >
        <Image
          src="/profile.png"
          alt="Customer profile"
          width={70}
          height={70}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%'
          }}
        />
      </Box>

      {/* Card Content */}
      <Box sx={{ 
        pt: { xs: 6, md: 5 },
        p: { xs: 3, md: 4 },
        position: 'relative'
      }}>
        {/* Decorative Quote Icon */}
        <Box
          sx={{
            position: 'absolute',
            top: 20,
            right: 20,
            color: '#705BFA',
            opacity: 0.1,
            fontSize: '60px'
          }}
        >
          ❝
        </Box>

        <Typography
          sx={{
            color: "#5E6282",
            fontSize: { xs: '15px', md: '16px' },
            fontWeight: 300,
            lineHeight: 1.6,
            mt: 3,
            mb: 2,
          }}
        >
          "On the Windows talking painted pasture yet its express parties use. 
          Sure last upon he same as knew next. Of believed or diverted no."
        </Typography>

        <Box>
          <Typography
            sx={{
              color: "#181E4B",
              fontSize: '18px',
              fontWeight: 600,
              mb: 0.5
            }}
          >
            Mike Taylor
          </Typography>
          <Typography
            sx={{
              color: "#5E6282",
              fontSize: '14px',
              fontWeight: 400
            }}
          >
            Lahore, Pakistan
          </Typography>
        </Box>
      </Box>

      {/* Decorative Border */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: '2px solid rgba(112, 91, 250, 0.15)',
          borderRadius: '24px',
          pointerEvents: 'none'
        }} 
      />
    </Box>
  </Box>
)
}

export default Testimonial