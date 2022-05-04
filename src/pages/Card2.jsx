import React,{useContext} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ThemeContext from "../context/theme/ThemeContext";

export default function Card2() {
  var a = useContext(ThemeContext);
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', bgcolor: a.state ? '#303134' : 'background.paper',
  }}>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6" color = {a.state ? 'white' : 'black'}>
            PLAZA ENTRY
          </Typography>
          <Typography variant="subtitle1" color = {a.state ? 'white' : 'text.secondary'} component="div">
            Entry <p style={{color:"blue"}}>789</p>
          </Typography>
          <Typography variant="subtitle1" color={a.state ? 'white' : 'text.secondary'} component="div">
            Exit <p style={{color:"red"}}>655</p>
          </Typography>
        </CardContent>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6" color = {a.state ? 'white' : 'black'}>
            COURTYARD ENTRY 
          </Typography>
          <Typography variant="subtitle1" color={a.state ? 'white' : 'text.secondary'} component="div">
            Entry <p style={{color:"blue"}}>789</p>
          </Typography>
          <Typography variant="subtitle1" color={a.state ? 'white' : 'text.secondary'} component="div">
            Exit <p style={{color:"red"}}>655</p>
          </Typography>
        </CardContent>
      </Box>
      {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            COURTYARD ENTRY 2
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Entry <p style={{color:"blue"}}>789</p>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Exit <p style={{color:"red"}}>655</p>
          </Typography>
        </CardContent>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            BASEMENT GUEST LIFT LOBBY
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Entry <p style={{color:"blue"}}>789</p>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Exit <p style={{color:"red"}}>655</p>
          </Typography>
        </CardContent>
      </Box> */}
    </Card>
  );
}