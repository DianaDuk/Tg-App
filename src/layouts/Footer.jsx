import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import FooterData from './Footer.json';

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(0); // активный элемент по умолчанию — первый

  return (
    <Box sx={{ display: 'flex', minHeight: '80px', bgcolor: '#171625', justifyContent: 'space-around', alignItems: 'center' }}>
      {FooterData.map((footer, index) => {
        const isActive = index === activeIndex;

        return (
          <Box
            key={index}
            onClick={() => setActiveIndex(index)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
              cursor: 'pointer',
              background: isActive ? 'radial-gradient(circle, #fd1ca791 0%, #fd1ca71e 40%, #171625 60%)' : 'transparent',
              width: '68px',
              height: '68px'
            }}
          >
            <Box
              component="img"
              src={footer.img}
              sx={{
                filter: isActive ? 'none' : 'grayscale(100%) opacity(0.6)',
                transition: '0.3s',
              }}
            />
            <Typography
              sx={{
                color: isActive ? '#FFFFFF' : '#FFFFFF66',
                fontWeight: 500,
                fontSize: '11px',
                fontFamily: 'Montserrat',
                transition: '0.3s',
              }}
            >
              {footer.label}
            </Typography>
          </Box>
        )
      })}
    </Box>
  );
};

export default Footer;
