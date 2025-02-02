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
    <Box sx={{ mt: { xs: 5, md: 10 }, fontFamily: "'Poppins', sans-serif" }}>
      {/* Hero Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: { xs: '16px', md: '16px 24px' },
          gap: { xs: 4, md: 0 }
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
              fontSize: { xs: '14px', md: '20px' },
              fontWeight: 600,
              fontFamily: "'Poppins', sans-serif",
              mb: 2,
              letterSpacing: '0.2em'
            }}
          >
            Best Destinations around the world
          </Typography>
          <Typography variant='h1'
            sx={{
              color: "#181E4B",
              fontSize: { xs: '32px', sm: '48px', md: '64px' },
              fontWeight: 700,
              fontFamily: "'Volkhov', serif",
              lineHeight: 1.1,
              mb: 3
            }}
          >
            Travel, enjoy
            and live a new
            and full life
          </Typography>
          <Typography 
            sx={{
              color: "#5E6282",
              fontSize: { xs: '14px', md: '16px' },
              fontWeight: 400,
              lineHeight: 1.8,
              mb: 4,
              maxWidth: 500,
              mx: { xs: 'auto', md: 0 }
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
              gap: 3,
              mb: 2
            }}
          >
            <Button sx={{ 
              backgroundColor: '#FF6F00',
              color: 'white',
              borderRadius: '8px',
              px: 4,
              py: 1.5,
              fontSize: '16px',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#E65100'
              }
            }}>
              Find out more
            </Button>
            <Box 
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                cursor: 'pointer'
              }}
            >
              <PlayCircleFilledIcon 
                sx={{
                  backgroundColor: "#DF6951",
                  color: "#fff",
                  borderRadius: "50%",
                  padding: "8px",
                  fontSize: "44px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
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
          justifyContent: 'center',
          mt: { xs: 4, md: 0 }
        }}>
          <Image 
            src="/traveller.png" 
            height={600} 
            width={600} 
            alt='traveller' 
            style={{ 
              width: '100%', 
              height: 'auto',
              maxWidth: '550px'
            }}
            priority
          />
        </Box>
      </Box>

      {/* Services Section */}
      <Box sx={{
        mt: { xs: 8, md: 12 }, 
        mb: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 }
      }}>
        <Typography
          sx={{
            color: "#5E6282",
            fontSize: { xs: '14px', md: '18px' },
            fontWeight: 600,
            textAlign: 'center',
            mb: 1,
            textTransform: 'uppercase'
          }}
        >
          CATEGORY
        </Typography>
        <Typography
          sx={{
            color: "#181E4B",
            fontSize: { xs: '28px', sm: '36px', md: '44px' },
            fontWeight: 700,
            fontFamily: "'Volkhov', serif",
            mb: 4,
            textAlign: 'center',
            lineHeight: 1.2
          }}
        >
          We Offer Best Services
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { 
              xs: 'repeat(1, 1fr)', 
              sm: 'repeat(2, 1fr)', 
              md: 'repeat(4, 1fr)' 
            },
            gap: { xs: 3, md: 4 },
            maxWidth: '1200px',
            mx: 'auto'
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                p: 3,
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)'
                }
              }}
            >
              <Image 
                src={service.icon}
                height={80}
                width={80}
                alt={service.title}
                style={{ marginBottom: '20px' }}
              />
              <Typography
                sx={{
                  color: '#1E1D4C',
                  fontSize: '20px',
                  fontWeight: 600,
                  mb: 2
                }}
              >
                {service.title}
              </Typography>
              <Typography
                sx={{
                  color: '#5E6282',
                  fontSize: '16px',
                  lineHeight: 1.6
                }}
              >
                {service.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Destinations Section */}
      <Box sx={{
        mt: { xs: 8, md: 12 }, 
        mb: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 }
      }}>
        <Typography
          sx={{
            color: "#5E6282",
            fontSize: { xs: '14px', md: '18px' },
            fontWeight: 600,
            textAlign: 'center',
            mb: 1,
            textTransform: 'uppercase'
          }}
        >
          Top Selling
        </Typography>
        <Typography
          sx={{
            color: "#181E4B",
            fontSize: { xs: '28px', sm: '36px', md: '44px' },
            fontWeight: 700,
            fontFamily: "'Volkhov', serif",
            mb: 4,
            textAlign: 'center',
            lineHeight: 1.2
          }}
        >
          DESTINATIONS
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { 
              xs: 'repeat(1, 1fr)', 
              sm: 'repeat(2, 1fr)', 
              lg: 'repeat(3, 1fr)' 
            },
            gap: { xs: 4, md: 5 },
            maxWidth: '1200px',
            mx: 'auto'
          }}
        >
          {destinations.map((destination, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <Image
                src={destination.icon}
                alt={destination.title}
                width={400}
                height={300}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover'
                }}
              />
              <Box
                sx={{
                  backgroundColor: '#705BFA',
                  p: 3
                }}
              >
                <Typography
                  sx={{
                    color: '#FFFFFF',
                    fontSize: '20px',
                    fontWeight: 600,
                    mb: 1
                  }}
                >
                  {destination.title}
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '16px',
                    lineHeight: 1.5
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
    );
  }
 export default Destination;