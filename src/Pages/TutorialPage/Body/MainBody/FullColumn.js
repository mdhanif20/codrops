import React from 'react';
import Box from '@mui/material/Box';
import ScrollAnimation from './ScrollAnimation';
import SideBar from '../SideBody/SideBar';
import Grid from '@mui/material/Grid';

const FullColumn = () => {
    return (
        <Grid container>
            <Grid sx={{mt:5}} xs={12} md={8}>
                <ScrollAnimation></ScrollAnimation>
            </Grid>
            <Grid   xs={12} md={4}>
                <SideBar></SideBar>
            </Grid>
        </Grid>
    );
};

export default FullColumn;