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
                                <img width="48" height="48" src="https://img.icons8.com/sf-regular/48/home-page.png" alt="Home"/>
                            </Link>   
                        </Box>
                        <Box mx={1} className='cursor'>
                            <img width="48" height="48" src="https://img.icons8.com/sf-regular/48/comments.png" alt="Post"/>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <img width="48" height="48" src="https://img.icons8.com/sf-regular/48/application-window.png" alt="Theme"/>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <img width="48" height="48" src="https://img.icons8.com/sf-regular/48/add.png" alt="add Theme"/>
                        </Box>
                        <Box mx={1} className='cursor iconLogout'>
                            <Link to='/login'>
                            <img width="48" height="48" src="https://img.icons8.com/sf-regular/48/enter-2.png" alt="Logout"/>
                            </Link>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
