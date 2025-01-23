import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Image from 'next/image';

const primaryButtonStyle = {
  backgroundColor: "#F1A501",
  fontSize: "16px",
  fontWeight: 100,
  fontFamily: "Poppins",
  color: "#FFFFFF",
  padding: "6px 12px",
  textTransform: "none",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(241, 165, 1, 0.25)",
  "&:hover": {
    backgroundColor: "#e69b00",
    boxShadow: "0 4px 8px rgba(241, 165, 1, 0.3)",
  }
};

const Destination = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMdScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  const getCardWidth = () => {
    if (isXsScreen) return '240px';
    if (isSmScreen) return '200px';
    if (isMdScreen) return '180px';
    return '220px';
  };

  const services = [
    {
      icon: '/satellite.png',
      title: 'Calculated Weather ',
      description: 'Built Wicket longer admire do barton vanity itself do in it.'
    },
    {
      icon: '/plane.png',
      title: 'Best Flights',
      description: 'Engrossed listening. Park gate sell they west hard for the.'
    },
    {
      icon: '/events.png',
      title: 'Local Events',
      description: 'Barton vanity itself do in it. Preferd to men it engrossed listening'
    },
    {
      icon: '/custom.png',
      title: 'Customization',
      description: 'We deliver outsourced aviation services for military customers'
    }
  ];

  const destinations = [
    {
      icon: '/destination1.png',
      title: 'Rome, Italy',
      description: '10 Days Trip.'
    },
    {
      icon: '/destination2.png',
      title: 'London, UK',
      description: '12 Days Trip.'
    },
    {
      icon: '/destination3.png',
      title: 'Full Europe',
      description: '28 Days Trip'
    }
  ];

  return (
    <Box sx={{ mt: { xs: 5, md: 10 } }}>
      {/* Hero Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: { xs: '16px', md: '16px 24px' },
        }}
      >
        <Box sx={{ 
          width: { xs: '100%', md: '50%' },
          textAlign: { xs: 'center', md: 'left' },
          px: { xs: 2, md: 0 }
        }}>
          <Typography 
            variant="h4" 
            sx={{
              color: "#DF6951",
              fontSize: { xs: '16px', md: '20px' },
              fontWeight: 500,
              fontFamily: "Poppins",
              mb: 2
            }}
          >
            Best Destinations around the world
          </Typography>
          <Typography variant='h1'
            sx={{
              color: "#181E4B",
              fontSize: { xs: '48px', sm: '64px', md: '89px' },
              fontWeight: 500,
              fontFamily: "'Volkhov', serif",
              lineHeight: 1.2,
              mb: 2
            }}
          >
            Travel, enjoy
            and live a new
            and full life
          </Typography>
          <Typography variant='h5'
            sx={{
              color: "#5E6282",
              fontSize: { xs: '14px', md: '16px' },
              fontWeight: 100,
              fontFamily: "Poppins",
              mb: 3,
              maxWidth: 500
            }}
          >
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.
          </Typography>
          
          <Box 
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              gap: { xs: 2, sm: 5 },
              mb: 2
            }}
          >
            <Button sx={primaryButtonStyle}>
              Find out more
            </Button>
            <Box 
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer'
              }}
            >
              <PlayCircleFilledIcon 
                sx={{
                  backgroundColor: "#DF6951",
                  color: "#fff",
                  borderRadius: "50%",
                  padding: "4px",
                  fontSize: "40px",
                  "& path": {
                    fill: "currentColor"
                  }
                }}
              />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 100,
                  fontFamily: "Poppins",
                  color: "#000",
                }}
              >
                Play Demo
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ 
          width: { xs: '100%', md: '50%' },
          display: 'flex', 
          justifyContent: 'center' 
        }}>
          <Image 
            src="/traveller.png" 
            height={600} 
            width={600} 
            alt='traveller' 
            style={{ 
              maxWidth: '100%', 
              height: 'auto' 
            }}
          />
        </Box>
      </Box>

      {/* Services Section */}
      <Box sx={{
        mt: { xs: 5, md: 10 }, 
        mb: { xs: 5, md: 10 },
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
      }}>
        <Typography variant='h6'
          sx={{
            color: "#5E6282",
            fontSize: { xs: '16px', md: '18px' },
            fontWeight: 200,
            fontFamily: "Poppins",
            mb: 2
          }}
        >
          CATEGORY
        </Typography>
        <Typography variant='h2'
          sx={{
            color: "#181E4B",
            fontSize: { xs: '36px', md: '50px' },
            fontWeight: 500,
            fontFamily: "'Volkhov', serif",
            mb: 2,
            textAlign: 'center'
          }}
        >
          We Offer Best Services
        </Typography>

        <Box
          sx={{
            maxWidth: '100%',
            mx: 'auto',
            px: { xs: 2, sm: 3, md: 4 },
            py: 4,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: { xs: 2, sm: 3, md: 4 },
              flexWrap: 'wrap',
            }}
          >
            {services.map((service, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  borderRadius: '12px',
                  padding: { xs: '20px 15px', sm: '25px 20px' },
                  width: getCardWidth(),
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
                  }
                }}
              >
                <Image 
                  src={service.icon}
                  height={50}
                  width={50}
                  alt={service.title}
                  style={{ marginBottom: '16px' }}
                />
                <Typography
                  sx={{
                    color: '#1E1D4C',
                    fontSize: { xs: '18px', sm: '20px' },
                    fontWeight: 400,
                    fontFamily: "'Open Sans', sans-serif",
                    marginBottom: '12px',
                    textAlign: 'center'
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  sx={{
                    color: '#5E6282',
                    fontSize: { xs: '14px', sm: '16px' },
                    fontWeight: 300,
                    fontFamily: 'Poppins',
                    textAlign: 'center',
                    lineHeight: 1.5,
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Destinations Section */}
      <Box sx={{
        mt: { xs: 5, md: 10 }, 
        mb: { xs: 5, md: 10 },
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
      }}>
        <Typography variant='h6'
          sx={{
            color: "#5E6282",
            fontSize: { xs: '16px', md: '18px' },
            fontWeight: 200,
            fontFamily: "Poppins",
            mb: 2
          }}
        >
          Top Selling
        </Typography>
        <Typography variant='h2'
          sx={{
            color: "#181E4B",
            fontSize: { xs: '36px', md: '50px' },
            fontWeight: 500,
            fontFamily: "'Volkhov', serif",
            mb: 2,
            textAlign: 'center'
          }}
        >
          DESTINATIONS
        </Typography>

        <Box
          sx={{
            maxWidth: '100%',
            mx: 'auto',
            px: { xs: 2, sm: 3, md: 4 },
            py: 4,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: { xs: 3, sm: 4, md: 5 },
              flexWrap: 'wrap',
            }}
          >
            {destinations.map((destination, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: "center",
                  maxWidth: 300,
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              >
                <Image
                  src={destination.icon}
                  alt={destination.title}
                  width={300}
                  height={250}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: 'auto'
                  }}
                />

                <Box
                  sx={{
                    backgroundColor: '#705BFA',
                    width: '100%',
                    padding: '16px 24px', 
                    marginLeft: 4,
                    borderBottomLeftRadius: '24px',
                    borderBottomRightRadius: '24px',
                  }}
                >
                  <Typography
                    sx={{
                      color: '#FFFFFF',
                      fontSize: { xs: '16px', sm: '18px' },
                      fontWeight: 600,
                      fontFamily: "'Open Sans', sans-serif",
                      marginBottom: '8px',
                    }}
                  >
                    {destination.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#FFFFFF',
                      fontSize: { xs: '14px', sm: '16px' },
                      fontWeight: 400,
                      fontFamily: 'Poppins',
                      lineHeight: 1.5,
                    }}
                  >
                    {destination.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Destination;