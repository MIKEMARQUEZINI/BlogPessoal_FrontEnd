import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='fundFooter'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h6" align="center" gutterBottom className='textos'>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" className="social" >
                            <a href="https://www.facebook.com/generationbrasil" target="_blank">
                            <img width="42" height="42" src="https://img.icons8.com/pulsar-color/42/facebook.png" alt="facebook"/>
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                            <img width="42" height="42" src="https://img.icons8.com/pulsar-color/42/instagram-new.png" alt="instagram-new"/>
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                            <img width="42" height="42" src="https://img.icons8.com/pulsar-color/42/linkedin.png" alt="linkedin"/>
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2023 Copyright:</Typography>
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