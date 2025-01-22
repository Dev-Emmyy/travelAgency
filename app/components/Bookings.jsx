import { Box, Typography } from '@mui/material'
import React from 'react'

const Bookings = () => {
  return (    
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: { xs: 3, sm: 4, md: 5 },
            flexWrap: 'wrap',
        }}>
        <Box>
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
            Easy and Fast 
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
            Book your next trip 
            in 3 easy steps
          </Typography>
        </Box>
        </Box>

        <Box>
            
        </Box>
    </Box>
  )
}

export default Bookings