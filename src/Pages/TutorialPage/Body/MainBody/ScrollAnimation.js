import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';

const useStyle = makeStyles({
    firstImage:{
        width:"100%"
    },
    Button:{
        fontSize: ".9rem",
        fontWeight: "600",
        padding:"15px 0px",
        margin:"5px 10px",
        width:"200px",
        border: "0px",
        borderRadius: 0,
        boxShadow: 0
    },
    link:{
        textDecoration:"none",
        color:"black",
        fontSize:"1.1rem",
        padding:"0px 5px",
        opacity:".6"
    },
    textLink:{
        textDecoration:"none",
        color:"#334BF7",
        "&:hover":{
            color:"black"
        }
    }
})

const ScrollAnimation = () => {
    const classes = useStyle();
    return (
        <Box sx={{textAlign:"start",mx:{xs:2,md:5}}}>
            <Typography variant="h3" sx={{fontSize:"2.5rem"}} gutterBottom component="div">
            Alternate Column Scroll Animation
            </Typography>
            <Typography sx={{fontSize:"1.4rem"}} variant="body1" gutterBottom>
            A grid layout with columns that scroll in opposite directions and a content preview animation.
            </Typography>
            <Typography sx={{fontSize:"1.2rem",opacity:".6",my:2}} variant="subtitle2" gutterBottom component="div">
            By Mary Lou in Playground on December 21, 2021
            </Typography>
            <img className={classes.firstImage} src="https://i.ibb.co/jJmpS90/columscroll-feat.jpg" alt="" />
            <Box sx={{textAlign:"center",my:7,display:{xs:"none",md:"block"}}}>
             <Button className={classes.Button} variant="contained">View demo</Button>
             <Button className={classes.Button} variant="contained">Download Source</Button>
            </Box>
            <Box sx={{textAlign:"center",my:3,display:{xs:"block",md:"none"}}}>
             <Button className={classes.Button} variant="contained">View demo</Button> <br />
             <Button className={classes.Button} variant="contained">Download Source</Button>
            </Box>

            <Box>
                <Typography variant="body1" gutterBottom >
                    <span style={{color:"red"}}>From our sponsor:</span>
                    <a className={classes.link} target="_blank" href="https://mailchimp.com/smart-marketing/?utm_source=codrops&utm_medium=dir&utm_campaign=phd_sp4_product_morethanplt_eng_codrops_row_en_202202_dir_prspct_pros_20642_sidebar_dogcjbv1_1x1_display_1x1&utm_content=prspct_pros_20642_sidebar_dogcjbv1_1x1_display_1x1&dclid=CjgKEAiAgP6PBhCR9b_zvqT_wRoSJAAoLx8_9LwLKAbm8ad_Fs5MgBrjxopVnV3DlaFzeBIHVTM9w_D_BwE" >Try Mailchimp today.</a>
                </Typography>
                <Typography sx={{fontSize:"1.1rem",my:5}} variant="subtitle1" gutterBottom component="div">
                Grids are truly magical. There’s so many different kind of things we can do with them; layout-wise and scroll-wise. Some time ago, I came across <a className={classes.textLink} href="https://giuliatonon.it/">Giulia Tonon’s amazing website</a> . It was made by the amazing duo of  <a className={classes.textLink} href="https://e-t.studio/">ET Studio</a>. The unique design is enhanced by the exquisite motion of the columns: while scrolling, the middle column scrolls one way, while the outer ones scroll the other way.
                <br /> <br />
                This is something that I thought would be interesting to build upon using <a className={classes.textLink} href="https://locomotivemtl.github.io/locomotive-scroll/">Locomotive Scroll</a> and combine it with a little idea of flying grid items. Once we click on a grid item, it animates to the center of the screen while scaling up. The other grid items move to their respective positions in the row of thumbnails beneath the main image. This kind of animation is highly inspired by the work of <a className={classes.textLink} href="https://twitter.com/AriBenoist">Aristide Benoist</a>  who is the master of delicate view switching motions and unique layout animations.
                <br /> <br />
                This is the initial view:
                <br /> <br />
                <img className={classes.firstImage} src="https://i.ibb.co/LNyFyc8/columscroll1.jpg" alt="" />
                </Typography>
                <Typography sx={{fontSize:"1.1rem",my:5}} variant="subtitle1" gutterBottom component="div">
                When clicking on a image, we move it to the center and animate all other images in the viewport to the little thumbnail navigation:
                </Typography>
                <img className={classes.firstImage} src="https://i.ibb.co/1LHQvXV/columscroll2.jpg" alt="" /> 
                <Typography sx={{fontSize:"1.1rem",my:5}} variant="subtitle1" gutterBottom component="div">
                And this is how all the motion flow looks like:
                 <br /> <br />
                 <video style={{width:"100%"}} autoplay controls loop src="https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/uploads/2021/12/columns1_opt.mp4"></video>
              
                
                </Typography>
            </Box>
        </Box>
    );
};

export default ScrollAnimation;