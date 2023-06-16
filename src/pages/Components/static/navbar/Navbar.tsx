import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css'
import { ArrowRight } from '@material-ui/icons';

function Navbar(): JSX.Element {
    return (
        <>
            <AppBar position="static">
                <Toolbar className="fundNav" variant="dense">
                    <Box className='icons'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                            <img width="42" height="42" src="https://img.icons8.com/pulsar-color/42/home-page.png" alt="home-page"/>
                            
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                            <img width="42" height="42" src="https://img.icons8.com/pulsar-color/42/comments.png" alt="postagens"/>
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                            <img width="42" height="42" src="https://img.icons8.com/pulsar-color/42/web.png" alt="theme"/>
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                            <img width="42" height="42" src="https://img.icons8.com/pulsar-color/42/add.png" alt="add theme"/>
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor iconLogout'>
                            <Typography variant="h6" color="inherit">
                            <img width="42" height="42" src="https://img.icons8.com/pulsar-color/42/exit.png" alt="exit"/>
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
