import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const UniversalCaseCard = ({gradientColor, price}) => {
  return (
    <Box sx={{borderRadius: '16px', display: 'flex', alignItems: 'flex-end', width: '167px', height: '204px',  background: `radial-gradient(circle at top, ${gradientColor} 0%, #1A1928 80%)`, bgcolor: '#1A1928', p: '15px', position: 'relative'}}>
    <Box component='img' src='/Tg-App/bag.svg' sx={{position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)'}} />
    <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between',}}>
        <Button variant='contained' sx={{width: '82px', height: '34px', borderRadius: '17px', backgroundColor: '#2D2C4B', textTransform: 'none'}}>Open</Button>
     <Box sx={{display: 'flex', alignItems: 'center', gap: '5px'}}>
        <Typography sx={{color: '#22B8DE'}}>{price}</Typography>
        <Box component='img' src='/Tg-App/almaz.svg' sx={{width: '16px', height: '16px'}} />
     </Box>
    </Box>
    </Box>
  )
}

export default UniversalCaseCard
