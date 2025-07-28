import React from 'react'
import { Box, IconButton, Avatar, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
  return (
 <Box
      sx={{
        backgroundColor: "#080512",
        borderRadius: "16px",
        padding: "12px",
        color: "#fff",
      }}
    >

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button variant='contained' startIcon={<CloseIcon  sx={{width: '16px', height: '16px', color: "#fff" }}/>} sx={{width: '77px', height: '32px', backgroundColor: '#413F4066', borderRadius:'32px', fontSize: '14px', textTransform: 'none'}}>Close</Button>
       <Box sx={{bgcolor: "#413F4066", borderRadius: "32px", width: "80px", height: "32px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <IconButton sx={{ color: "#fff" }}>
          <KeyboardArrowDownIcon /> 
        </IconButton>

         <IconButton sx={{ color: "#fff" }}>
          <MoreVertIcon />
        </IconButton>
       </Box>
      </Box>


      <Box
        sx={{
          textAlign: "center",
          mb: 2,
        }}
      >
      <Box sx={{backgroundImage: "url(/public/bg-avatar.svg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: "100%", aspectRatio: '4.6 / 1'}}>
        <Avatar
          src="/public/user.svg"
          sx={{ width: 36, height: 36, margin: "0 auto", mb: 1 }}
        />
        <Typography sx={{ fontWeight: 400, fontSize: "14px", fontFamily: "Unbounded"}}>
          UserName
        </Typography>
        </Box>
        <Box sx={{display: "flex", textAlign: "center", width: "120px", margin: "0 auto", gap: "5px",mt: "10px"}}>
        <Typography sx={{ color: "#ff3366", fontSize: "14px" }}>
          ●
        </Typography>
        <Typography sx={{ color: "#FFFFFF99", fontSize: "14px", fontWeight: "400", fontFamily: "Montserrat", fontStyle: "italic" }}> Live Winnings</Typography>
        </Box>
      </Box>


        <Box sx={{justifyContent: "space-between", display: "flex", marginTop: "-85px"}}>
          <Box sx={{ textAlign: "center", backgroundImage: "url(/public/bg-icon.svg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width:"92px", height: "80px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '5px', pr: '15px' }}>
            <Box
              component='img'
              src="/public/icon.svg"
              alt="coin"
              sx={{width: '24px', height: '24px'}}
            />
            <Typography sx={{ fontSize: "15px", fontWeight: 400, color: "#FFE999",  fontFamily: "Unbounded" }}>
              211.25
            </Typography>
          </Box>


          <Box sx={{ textAlign: "center", backgroundImage: "url(/public/bg-almaz.svg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover',  width:"92px", height: "80px",  display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '5px', pl: '15px' }}>
            <Box
              component='img'
              src="/public/almaz.svg"
              alt="diamond"
              sx={{width: '24px', height: '24px'}}
            />
            <Typography sx={{ fontSize: "15px", fontWeight: 400, color: "#30A5F2",  fontFamily: "Unbounded" }}>
              211.25
            </Typography>
          </Box>
        </Box>
      </Box>
  );
}

export default Header
