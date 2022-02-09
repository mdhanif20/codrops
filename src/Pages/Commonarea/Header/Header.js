import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@material-ui/core';

const useStyles= makeStyles({
    header:{
        
    },
    logo:{
        fontSize: "1.7rem",
        fontWeight: "600",
        color: "#334BF7"
    },
    logoSmall:{
        fontSize: "1.7rem",
        fontWeight: "600",
        color: "#334BF7",
        marginTop:"25px"
    },
    details:{
        padding: "10px",
        fontSize: "1rem",
        fontWeight: 500,
        cursor:"pointer",
        "&:hover":{
            color:"#334BF7"
        }
    },
    search:{
       
    }
})


const Header = () => {
    const classes = useStyles();
    return (
        <Box>

        <Box 
        sx={{
            display:{md:"flex",xs:"none"},
            justifyContent: "space-around",
            alignItems:"center",
            padding:"20px 0px 40px 0px",
        }}
        >
            <Box className={classes.logo}>codrops</Box>
            <Box>
                <span className={classes.details}>Tutorial</span>
                <span  className={classes.details}>Playground</span>
                <span  className={classes.details}>Articals</span>
                <span  className={classes.details}>Collective</span>
                <span  className={classes.details}>CSS Reference</span>
            </Box>
            <Box>
                <span className={classes.details}>Tw</span>
                <span className={classes.details}>Fb</span>
                <span className={classes.details}>Gh</span>
                <span className={classes.details}>In</span>
                <span className={classes.details}>Rss</span>
            </Box>
            <Box className={classes.search}>
            <TextField style={{marginTop:"-25px"}} id="standard-basic" label="Search on codrops" variant="standard" /> <span style={{marginLeft:"15px"}}><SearchIcon/></span>
            </Box>
        </Box>

        <Box 
        sx={{
            display:{md:"none",xs:"block"},
            textAlign:"center"
        }}
        >
            <Box className={classes.logoSmall}>codrops</Box>
            <Box sx={{py:3}}>
                <span className={classes.details}>Tutorial</span>
                <span  className={classes.details}>Playground</span>
                <span  className={classes.details}>Articals</span> <br /> 
                <br />
                <span  className={classes.details}>Collective</span>
                <span  className={classes.details}>CSS Reference</span>
            </Box>
            
            <Box sx={{ display:"flex",
                    alignItems:"center",
                    justifyContent: "center",margin:"12px 0px 25px 0px"}}>
            <TextField style={{marginTop:"-25px"}} id="standard-basic" label="Search on codrops" variant="standard" /> <span style={{marginLeft:"15px"}}><SearchIcon/></span>
            </Box>
            <Box sx={{mb:5}}>
                <span className={classes.details}>Tw</span>
                <span className={classes.details}>Fb</span>
                <span className={classes.details}>Gh</span>
                <span className={classes.details}>In</span>
                <span className={classes.details}>Rss</span>
            </Box>
        </Box>

        </Box>
       
    );
};

export default Header;