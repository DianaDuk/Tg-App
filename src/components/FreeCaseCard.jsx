import { Box, Typography } from '@mui/material'
import React from 'react'

const FreeCaseCard = () => {
  return (
    <Box sx={{borderRadius: '16px', display: 'flex', alignItems: 'flex-end', width: '167px', height: '204px', backgroundImage: `url(${import.meta.env.BASE_URL}Casebg.png)`, p: '15px', position: 'relative'}}>
    <Box component='img' src='/Tg-App/frog.svg' sx={{position: 'absolute', left: '0px', top: '22px'}} />
    <Typography sx={{color: '#FFFFFF', width: '100%', textAlign: 'center'}}>Free Case</Typography>
    </Box>
  )
}

export default FreeCaseCard
