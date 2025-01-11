import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Image from 'next/image';
import React from 'react';

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

  return (
    <Box sx={{ mt: 10 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
        }}
      >
        <Box>
          <Typography 
            variant="h4" 
            sx={{
              color: "#DF6951",
              fontSize: "20px",
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
              fontSize: "89px",
              fontWeight: 500,
              fontFamily: "'Volkhov', serif",
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
              fontSize: "16px",
              fontWeight: 100,
              fontFamily: "Poppins",
              mb: 3
            }}
          >
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </Typography>
          
          <Box 
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
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

        <Box>
          <Image src="/traveller.png" height={600} width={600} alt='traveller'/>
        </Box>
      </Box>

      <Box sx={{
        mt: 10, 
        mb: 10,
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
      }}>
        <Box>
          <Typography variant='h6'
            sx={{
              color: "#5E6282",
              fontSize: "18px",
              fontWeight: 200,
              fontFamily: "Poppins",
              mb: 2
            }}
          >
            CATEGORY
          </Typography>
        </Box>
        <Box>
          <Typography variant='h2'
            sx={{
              color: "#181E4B",
              fontSize: "50px",
              fontWeight: 500,
              fontFamily: "'Volkhov', serif",
              mb: 2
            }}
          >
            We Offer Best Services
          </Typography>
        </Box>

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
                  alt={service.icon}
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
    </Box>
  );
};

export default Destination;