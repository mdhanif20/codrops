import React from 'react';
import Box from '@mui/material/Box';
import sideimg from "../../../Images/public.jpg";
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import editor from "../../../Images/diviimg.png";
import assignment from "../../../Images/assignment.png";
import advertise from "../../../Images/advertise.png";
import uncode from "../../../Images/uncode.png";

const useStyle = makeStyles({
    marketingPlatform:{
        background: "black",
        padding: "30px 35px",
        marginTop: "-10px",
        color: "#fff",
        textAlign: "start"
    },
    serviceImg:{
        display:"grid",
        gridTemplateColumns: "repeat(2, 1fr)",
    }

})

const SideBar = () => {
    const classes = useStyle();
    return (
        <Box sx={{ml:{md:10,xs:2},mr:{md:3,xs:2},mt:5}}>
            <a style={{textDecoration:"none"}} target="_blank" href="https://mailchimp.com/grow-with-mailchimp/?utm_source=codrops&utm_medium=dir&utm_campaign=phd_sp4_product_morethanplt_eng_codrops_row_en_202202_dir_prspct_pros_20641_sidebar_coffeecav1_1x1_display_1x1&utm_content=prspct_pros_20641_sidebar_coffeecav1_1x1_display_1x1&dclid=CjgKEAiAxoiQBhC72q7ktOPryBESJAD5lEYN8WWwE8gKHcPBxD2ihUiavtpFbaXXs5pPoyOWJDOnxfD_BwE">
            <Box sx={{cursor:"pointer"}}>
                <img style={{width:"100%"}} src={`${sideimg}`} alt="" />
                <Typography className={classes.marketingPlatform} variant="body1" gutterBottom>
                    Drive better results with a smart marketing platform. Try Mailchimp today.
                </Typography>
            </Box>
            </a>
            
            <Box sx={{mt:5,mb:10}}>
            <Box sx={{display:"flex",justifyContent: "space-evenly"}}>
                <p>
                    <img src={`${editor}`} alt="" />
                </p>
                <p>
                    <img src={`${assignment}`} alt="" />
                </p>
                
            </Box>
            <Box>
            <p style={{textAlign:"start",marginLeft:"30px"}}>
                    <img src={`${advertise}`} alt="" />
            </p>
            </Box>
            </Box>
            <Box>
            <img style={{width:"100%"}} src={`${uncode}`} alt="" />
            </Box>
        </Box>
    );
};

export default SideBar;