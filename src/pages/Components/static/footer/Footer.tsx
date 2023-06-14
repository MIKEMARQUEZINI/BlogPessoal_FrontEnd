import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#09483b", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/generationbrasil" target="_blank">
                            <img width="60" height="60" src="https://img.icons8.com/fluency/60/facebook-new.png" alt="facebook-new"/>
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                            <img width="60" height="60" src="https://img.icons8.com/fluency/60/instagram-new.png" alt="instagram-new"/>
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                            <img width="60" height="60" src="https://img.icons8.com/fluency/60/linkedin.png" alt="linkedin"/>
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#09483b", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2023 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;