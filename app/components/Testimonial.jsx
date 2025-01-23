import { Box, Typography, Grid } from '@mui/material'
import React from 'react'

const Testimonial = () => {
  return (
     <Box
        sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        gap: { xs: 3, sm: 4, md: 5 },
        p: { xs: 2, sm: 3, md: 4 },
        mt: 10,
        }}>
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
            Testimonials
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
            What people say about Us.
        </Typography>
        </Box>

    <Box 
        sx={{
            width: { xs: '100%', md: '50%' },
            maxWidth: 400,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 10px 25px rgba(112, 91, 250, 0.2)',
            borderRadius: '24px',
            overflow: 'visible',
            backgroundColor: "#ffffff",
            border: '1px solid #f0f0f0'
        }}
        >
        {/* Floating Profile Image */}
        <Box
            sx={{
            position: 'absolute',
            top: -30,
            left: -15,
            zIndex: 10,
            width: 70,
            height: 70,
            borderRadius: '50%',
            border: '3px solid white',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            overflow: 'visible',
            backgroundColor: 'white'
            }}
        >
            <Box
            component="img"
            src="/profile.png"
            alt="profile"
            sx={{ 
                width: '100%', 
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%'
            }}
            />
        </Box>

        {/* Content Container */}
        <Box sx={{ 
            pt: 5,  
            p: 3 
        }}>
            <Typography
            variant="body2"
            sx={{
                color: "#5E6282",
                fontSize: { xs: '14px', sm: '16px' },
                fontWeight: 300,
                fontFamily: "Poppins",
                mt: 3,
                mb: 2,
                lineHeight: 1.6
            }}
            >
            "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
            </Typography>

            <Typography
            variant="body2"
            sx={{
                color: "#5E6282",
                fontSize: { xs: '14px', sm: '16px' },
                fontWeight: 600,
                fontFamily: "Poppins",
            }}
            >
            Mike taylor
            </Typography>
            <Typography
            variant="body2"
            sx={{
                color: "#5E6282",
                fontSize: { xs: '14px', sm: '16px' },
                fontWeight: 300,
                fontFamily: "Poppins",
            }}
            >
            Lahore, Pakistan
            </Typography>
        </Box>

        {/* Wing-like Border Effect */}
        <Box 
            sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            border: '2px solid #705BFA',
            borderRadius: '24px',
            borderTopLeftRadius: '50px',
            boxShadow: 'inset 0 0 10px rgba(112, 91, 250, 0.2)'
            }} />
        </Box>
    </Box>
  )
}

export default Testimonial