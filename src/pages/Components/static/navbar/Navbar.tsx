import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar(): JSX.Element {
    return (
        <>
            <AppBar position="static">
                <Toolbar className="fundNav" variant="dense">
                    <Box className='icons'>
                            
                             <Box mx={1} className='cursor'>       
                             <Link to='/home'>                     
                                <Typography variant="h6" color="inherit">
                                    <img width="42" height="42" src="https://img.icons8.com/pulsar-color/42/home-page.png" alt="home-page"/>
                                </Typography>
                            </Link>   
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
                            <Link to='/login'>
                            <Typography variant="h6" color="inherit">
                            <img width="42" height="42" src="https://img.icons8.com/pulsar-color/42/exit.png" alt="exit"/>
                            </Typography>
                            </Link>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
