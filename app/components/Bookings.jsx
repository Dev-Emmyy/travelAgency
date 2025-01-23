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
        gap: { xs: 3, sm: 4, md: 5 },
        p: { xs: 2, sm: 3, md: 4 },
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
            fontSize: { xs: '16px', sm: '18px' },
            fontWeight: 200,
            fontFamily: "Poppins",
            mb: 2,
            textTransform: 'uppercase',
            letterSpacing: 1
          }}
        >
          Easy and Fast 
        </Typography>

        <Typography 
          variant='h2'
          sx={{
            color: "#181E4B",
            fontSize: { xs: '36px', sm: '44px', md: '50px' },
            fontWeight: 700,
            fontFamily: "'Volkhov', serif",
            lineHeight: 1.2,
            mb: 3
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
                marginBottom: 3,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateX(10px)',
                }
              }}
            >
              <Grid item xs={2} sm={2}>
                <Box
                  component="img"
                  src={booking.icon}
                  alt={booking.title}
                  sx={{ 
                    width: '100%', 
                    maxWidth: { xs: 60, sm: 80 }, 
                    display: 'block', 
                    margin: 'auto' 
                  }}
                />
              </Grid>

              <Grid item xs={10} sm={10}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: "#181E4B",
                    fontSize: { xs: '16px', sm: '18px' },
                    fontWeight: 600,
                    fontFamily: "'Volkhov', serif",
                    mb: 1
                  }}
                >
                  {booking.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: "#5E6282",
                    fontSize: { xs: '14px', sm: '16px' },
                    fontWeight: 300,
                    fontFamily: "Poppins",
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
          maxWidth: 400,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0 10px 25px rgba(112, 91, 250, 0.2)',
          borderRadius: '24px',
          overflow: 'hidden',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.03)',
          }
        }}
      >
        <Box
          sx={{
            backgroundColor: '#705BFA',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: { xs: 2, sm: 3 }
          }}
        >
          <Box
            component="img"
            src="/Booking.jpg"
            alt="Booking Process"
            sx={{ 
              width: '100%', 
              maxWidth: 300,
              borderRadius: '16px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
            }}
          />
        </Box>
        
        <Typography
          variant="body2"
          sx={{
            color: "#5E6282",
            fontSize: { xs: '14px', sm: '16px' },
            fontWeight: 300,
            fontFamily: "Poppins",
            textAlign: 'center',
            p: 2,
            backgroundColor: '#f9f9ff'
          }}
        >
          Seamless travel booking experience tailored to your needs
        </Typography>
      </Box>
    </Box>
  )
}

export default Bookings