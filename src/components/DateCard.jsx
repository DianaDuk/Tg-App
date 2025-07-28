import { Box } from '@mui/material'
import React from 'react'

const DateCard = () => {
  return (
    
<Box sx={{width: '69.2px', display: 'flex', justifyContent: 'center', ml: '-10px'
}}>
    <Box
  sx={{
    width: '53px',
    height: '53px',
    borderRadius: '8px',
    position: 'relative',
    overflow: 'hidden',
    transform: 'skew(-17deg)',
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      padding: '1px', 
      borderRadius: '8px',
      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, rgba(133, 133, 133, 0) 100%)',
      WebkitMask:
        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
      zIndex: 1,
    },
    backgroundColor: '#1A192999',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  }}
>
  <Box component="img" src="/Tg-App/calendar.svg" sx={{ zIndex: 2, transform: 'skew(17deg)', width: '30px', height: '30px' }} />
</Box>
</Box>

  )
}

export default DateCard
