import { Box, Typography, Grid } from '@mui/material'
import React from 'react'

const Bookings = () => {

  const bookings = [
    {
      icon: '/bookingLogo.png',
      title: 'Choose Destination',
      description: 'Select your dream destination and start your journey with ease.'
    },
    {
      icon: '/bookingLogo1.png',
      title: 'Make Payments',
      description: 'Securely complete your payment to confirm your booking.'
    },
    {
      icon: '/bookingLogo2.png',
      title: 'Reach Airport on Selected Date',
      description: 'Arrive at the airport on your chosen date to begin your adventure.'
    }
  ];

  return (    
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'center',
      alignItems: 'center',
      gap: { xs: 3, md: 8 },
      p: { xs: 3, md: 6 },
      bgcolor: 'background.paper',
    }}
  >
    {/* Left Side - Text and Steps */}
    <Box 
      sx={{ 
        width: { xs: '100%', md: '50%' },
        maxWidth: 600,
        pr: { md: 4 }
      }}
    >
      <Typography 
        variant='h6'
        sx={{
          color: "#5E6282",
          fontSize: { xs: '14px', md: '16px' },
          fontWeight: 600,
          fontFamily: "'Poppins', sans-serif",
          mb: 2,
          textTransform: 'uppercase',
          letterSpacing: 2,
          textAlign: { xs: 'center', md: 'left' }
        }}
      >
        Easy and Fast 
      </Typography>

      <Typography 
        variant='h2'
        sx={{
          color: "#181E4B",
          fontSize: { xs: '28px', sm: '36px', md: '44px' },
          fontWeight: 700,
          fontFamily: "'Volkhov', serif",
          lineHeight: 1.2,
          mb: 3,
          textAlign: { xs: 'center', md: 'left' }
        }}
      >
        Book your next trip 
        in 3 easy steps
      </Typography>

      <Box sx={{ mt: 3 }}>
        {bookings.map((booking, index) => (
          <Grid
            container
            key={index}
            spacing={2}
            alignItems="center"
            sx={{ 
              mb: 3,
              p: 2,
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: { md: 'translateX(10px)' },
                bgcolor: { md: 'action.hover' }
              }
            }}
          >
            <Grid item xs={3} sm={2}>
              <Box
                component="img"
                src={booking.icon}
                alt={booking.title}
                sx={{ 
                  width: '100%', 
                  maxWidth: 80,
                  height: 'auto',
                  display: 'block', 
                  margin: 'auto' 
                }}
              />
            </Grid>

            <Grid item xs={9} sm={10}>
              <Typography 
                sx={{ 
                  color: "#181E4B",
                  fontSize: { xs: '16px', md: '18px' },
                  fontWeight: 600,
                  fontFamily: "'Poppins', sans-serif",
                  mb: 1
                }}
              >
                {booking.title}
              </Typography>
              <Typography 
                sx={{ 
                  color: "#5E6282",
                  fontSize: { xs: '14px', md: '15px' },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {booking.description}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>

    {/* Right Side - Image with Description */}
    <Box 
      sx={{
        width: { xs: '100%', md: '50%' },
        maxWidth: 500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '24px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: { xs: '0 4px 12px rgba(0,0,0,0.1)', md: '0 10px 25px rgba(112, 91, 250, 0.2)' },
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: { md: 'scale(1.03)' },
        }
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: { xs: 2, md: 3 },
          bgcolor: 'primary.light'
        }}
      >
        <Box
          component="img"
          src="/Booking.jpg"
          alt="Booking Process"
          sx={{ 
            width: '100%',
            height: 'auto',
            borderRadius: '16px',
            aspectRatio: '1.5/1',
            objectFit: 'cover'
          }}
        />
      </Box>
      
      <Box
        sx={{
          width: '100%',
          p: { xs: 2, md: 3 },
          bgcolor: 'background.paper',
          textAlign: 'center'
        }}
      >
        <Typography
          sx={{
            color: "#5E6282",
            fontSize: { xs: '14px', md: '16px' },
            fontWeight: 500,
            fontFamily: "'Poppins', sans-serif",
            lineHeight: 1.5
          }}
        >
          Seamless travel booking experience tailored to your needs
        </Typography>
      </Box>
    </Box>
  </Box>
)
}
export default Bookings