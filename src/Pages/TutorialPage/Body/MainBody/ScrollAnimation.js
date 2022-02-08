import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import img from "../../../Images/Github_Icon.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import maryimg from "../../../Images/mary.jpeg";

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
    },
    github:{
        display: "flex",
        alignItems: "center",
        background: "#F8F8F8",
        padding: "14px 0px",
        margin:"0px 0px 20px 0px"
    },
    gitLink:{
        textDecoration:"none",
        color: "#334BF7",
        fontSize: "1.2rem",
        fontWeight:"700",
        "&:hover":{
            color:"black"
        }
    },
    designArea:{
        borderTop: "1px solid #f1f1f1",
        borderBottom: "1px solid #f1f1f1",
        
        display:"flex",
        justifyContent:"space-between",
        padding: "32px 0px",
        margin: "40px 0px"
    },
    designLink:{
        color:"#334BF7",
        cursor:"pointer",
        "&:hover":{
            color:"black"
        }
    },
    tagged:{
        color:"#334BF7",
        marginLeft:"10px",
        cursor:"pointer",
        textDecoration:"none",
        "&:hover":{
            color:"black"
        }
    },
    maryDetails:{
        display:"flex",
        padding:"40px",
        background:"#F1F1F1",
        margin:"60px 0px"
    },
    maryDetailsLink:{
        textDecoration: "none",
        fontSize: "1rem",
        fontWeight: 600,
        "&:hover":{
            color:"#334BF7"
        }
    },
    marySocialIcon:{
        color:"black",
        textDecoration: "none",
        marginRight:"10px",
        "&:hover":{
            color:"#334BF7"
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

            <a href="#">
            <img className={classes.firstImage} src="https://i.ibb.co/jJmpS90/columscroll-feat.jpg" alt="" /> 
            </a>
            
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
                <br /> <br />
                 Please be aware that this experiment is mostly a mockup (no “real” thumbnail navigation for this one)!
                <br /> <br />
                I really hope you find this inspirational! Thank you for checking by!
                </Typography>
                <Box className={classes.github}>
                    <Box sx={{mx:4}}>
                        <img src={`${img}`} alt="" />
                    </Box>
                    <Box>
    
                        <a className={classes.gitLink} href="https://github.com/codrops/ColumnScroll/"> Find this project on Github</a>
                       
                    </Box>
                </Box>
            </Box>
            <Box className={classes.designArea}>
                <Box className={classes.designLink} sx={{display:{md:"flex",xs:"none"}}}>
                    <Box>
                      <ArrowBackIcon/>
                    </Box>
                    <Box sx={{pl:2}}>
                    8 Design Tips to Make Your Blog or Shop Stand <br /> Out
                    </Box>
                   
                </Box>
                <Box className={classes.designLink}>
                   <Box sx={{display:{md:"flex",xs:"none"}}}>
                       <Box sx={{pr:2}}>Three.js Animation with K-d (Christmas) Tree <br />
                       <Box style={{margin:"0px",textAlign:"end"}}>Algorithm </Box> </Box>
                       <Box> <ArrowForwardIcon/></Box>
                   </Box>

                </Box>
                <Box sx={{display:{md:"none",xs:"flex"}}}>
                    <Box><ArrowBackIcon/></Box>
                    <Box><ArrowForwardIcon/></Box>
                </Box>
            </Box>
            <Box>
                <span>Tagged With : </span>
                <span> <a href="#"  className={classes.tagged}>column</a> </span>
                <span > <a href="#" className={classes.tagged}>image grid</a>  </span>
                <span > <a href="#" className={classes.tagged}>Iocomotive scroll</a>  </span>
                <span > <a href="#" className={classes.tagged}>preview </a>  </span>
                <span > <a href="#" className={classes.tagged}>smooth scrolling</a>  </span>
                <span > <a href="#" className={classes.tagged}>thumbnails </a>  </span>
               
            </Box>

            <Box sx={{display:{md:"flex",xs:"block"},
                    padding:"40px",
                    background:"#F1F1F1",
                    margin:"60px 0px"}}>
                <Box>
                    <img style={{borderRadius:"50%"}} src={`${maryimg}`} alt="" />
                </Box>
                <Box sx={{ml:{md:5,xs:0},mt:{md:0,xs:4}}}>
                 <a className={classes.maryDetailsLink} href="#">
                     <span style={{fontSize:"1.4rem"}}>Mary Lou</span>
                     </a>
                 <Typography sx={{my:3,fontSize:"1.1rem"}} variant="body1" gutterBottom>
                 ML is a freelance web designer and developer with a passion for interaction design. She studied Cognitive Science and Computational Logic and has a weakness for the smell of freshly ground peppercorns.
                </Typography>
                <a className={classes.maryDetailsLink} href="#">http://www.codrops.com</a>
                <Box sx={{mt:5}}>
                <span> <a href="#"  className={classes.marySocialIcon}>Twitter</a> </span>
                <span> <a href="#"  className={classes.marySocialIcon}>Dribble</a> </span>
                <span> <a href="#"  className={classes.marySocialIcon}>Instagram</a> </span>
                <span> <a href="#"  className={classes.marySocialIcon}>Github</a> </span>
                
                </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ScrollAnimation;