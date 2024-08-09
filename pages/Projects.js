import 'animate.css/animate.min.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Projects() {
  return (
    <Box sx={{ flexGrow: 1 }} className='p-4 cursor-pointer'>
      <Grid container spacing={4}>
        <Grid item xs={6} md={4}>
          <Item className="animate__animated animate__fadeIn animate__delay-1s">
           <div>
            <h1 className='font-bold'>project-1</h1>
            <h1>food App</h1>
            <span>TechStack:html,css,javascript,node</span>
           </div>
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item className="animate__animated animate__fadeIn animate__delay-2s">xs=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item className="animate__animated animate__fadeIn animate__delay-3s">xs=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item className="animate__animated animate__fadeIn animate__delay-4s">xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
