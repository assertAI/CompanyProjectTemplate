import "../App.css";
import React,{ useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Mallfootfall from './Mallfootfall.png';
import FCfootfall from './FCfootfall.png';
import MallDensity from './MallDensity.png';
import FCDensity from './FCDensity.png';
import ThemeContext from "../context/theme/ThemeContext";


const Card1 = () => {
return <div style={{paddingLeft:'20px',paddingRight:'20px'}}>Mall Footfall<br/><img src={Mallfootfall}/><br/><h4>4983</h4></div>
}

const Card2 = () => {
  return <div style={{paddingLeft:'20px',paddingRight:'20px'}} >FC Footfall<br/><img src={FCfootfall}/><h4>195</h4></div>
  }

  const Card3 = () => {
    return <div style={{paddingLeft:'20px',paddingRight:'20px'}} >Mall Density<br/><img src={MallDensity}/><br/><h4>2597/13500</h4><br/>Footfall Density<br/>(Including Staff)</div>
    }

    const Card4 = () => {
      return <div style={{paddingLeft:'20px',paddingRight:'20px'}} >FC Density<br/><img src={FCDensity}/><h4>0/325</h4><br/>Footfall Density<br/>(Including Staff)</div>
      }
      

const FirstCard = () => {
  var a = useContext(ThemeContext);
  
  return  <div>
   
  <Card
    sx={{
      display: 'flex',
      alignItems: 'center',
      width: 'fit-content',
      border: (theme) => `1px solid ${theme.palette.divider}`,
      borderRadius: 1,
      bgcolor: a.state ? '#303134' : 'background.paper',
      paddingBlock:'10px',
      color: a.state ? 'white' : 'text.secondary',
      '& svg': {
        m: 1.5,
      },
      '& hr': {
        mx: 0.5,
      },
    }}
  >
    <Card1 />
    <Divider orientation="vertical" flexItem />
    <Card2 />
    <Divider orientation="vertical" flexItem />
    <Card3 />
    <Divider orientation="vertical" flexItem />
    <Card4 />
 
  </Card>
</div>
;
};

export default FirstCard;
