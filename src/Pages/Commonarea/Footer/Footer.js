import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import img from "../../Images/farm.jpg";
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    footerContainer:{
        background:'#f1f1f1',
        
    },
    footerLink:{
        display:"flex",
        textAlign:"start",
        alignItems:"center",
        fontSize:"1.1rem",
        fontWeight:'500'
    },
    text:{
        width:"15%",
        padding:"60px 30px"
    },
    copyright:{
        fontSize:"1.1rem",
        textAlign:"end",
        padding:"60px 10px",
    },
    smallScreenText:{
       
    }
})

const Footer = () => {
    const classes = useStyle()
    return (
        <Box>
            <Box sx={{display:{md:"block",xs:"none"}}}>
            <Grid className={classes.footerContainer} container>
            <Grid  xs={12} md={8}>
               <Box className={classes.footerLink}>
                <Box className={classes.text}>
                        <p>About</p>
                        <p>Contact</p>
                        <p>Advertise</p>
                        <p>Privacy Policy</p>
                        <p>License</p>
                    </Box>
                    <Box className={classes.text}>
                        <p>Tutorials</p>
                        <p>Articles</p>
                        <p>Playground</p>
                        <p>Blueprints</p>
                        <p>Freebies</p>
                    </Box>
                    <Box className={classes.text}>
                        <p>CSS Reference</p>
                        <p>Collective</p>
                        <p>Newsletter</p>
                        <p>Archives</p>
                        <p>Deals</p>
                    </Box>
                <Box sx={{textAlign:"center",width:"40%",cursor:"pointer"}}>
                    <img style={{width:"100%",borderRadius:"10px"}} src={`${img}`} alt="" />  
                </Box>
               </Box>
            </Grid>
            <Grid xs={12} md={4}>
            <Box className={classes.copyright}>
                <p style={{marginBottom:"0px"}}>Content delivered by</p>
                <Box style={{fontWeight:"500"}}>StackPath</Box>
                <p style={{marginTop:"60px"}}>© Codrops 2022</p>
            </Box>
            </Grid>
        </Grid>
            </Box>

        <Box sx={{background:'#f1f1f1',mt:10,py:5,display:{md:"none",xs:"block"}}}>
            <Box sx={{ 
                    justifyContent:" space-between",
                    p:5,
                    fontWeight:'500',
                    fontSize:"1.1rem"
                    }}>
                <span style={{margin:"5px"}}>About</span>
                <span style={{margin:"5px"}}>Contact</span>
                <span style={{margin:"5px"}}>Advertise</span> <br /> <br />
                <span style={{margin:"5px"}}>Privacy Policy</span>
                <span style={{margin:"5px"}}>License</span>
                <span style={{margin:"5px"}}>Tutorials</span> <br /> <br />
                <span style={{margin:"5px"}}>Articles</span>
                <span style={{margin:"5px"}}>Playground</span>
                <span style={{margin:"5px"}}>Freebies</span> <br /> <br />
                <span style={{margin:"5px"}}>CSS Reference</span>
                <span style={{margin:"5px"}}>Deals</span>
                
                <span style={{margin:"5px"}}>Newsletter</span> <br /> <br />
                <span style={{margin:"5px"}}>Archives</span>
                <span style={{margin:"5px"}}>Collective</span>
            </Box>
            <Box sx={{textAlign:"center",cursor:"pointer"}}>
                    <img style={{width:"60%",borderRadius:"10px"}} src={`${img}`} alt="" />  
            </Box>
            <Box sx={{textAlign:"center"}}>
                <Typography sx={{pt:5}} variant="body1" gutterBottom>
                  Content delivered by <span style={{fontWeight:"500"}}>StackPath</span> <br /> <br />
                  © Codrops 2022
                </Typography>
            </Box>
        </Box>
        
        </Box>
      
    );
};

export default Footer;