import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';


function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: "#09483b"}} variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h6" color="inherit">
                            Blog Pessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent={'center'}>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                            <img width="42" height="42" src="https://img.icons8.com/fluency/48/exterior.png" alt="exterior"/>
                            
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                            <img width="42" height="42" src="https://img.icons8.com/fluency/48/speech-bubble.png" alt="Postagens"/>
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                            <img width="42" height="42" src="https://img.icons8.com/fluency/48/chrome-reader-mode.png" alt="Tema"/>
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                            <img width="42" height="42" src="https://img.icons8.com/fluency/48/add-rule.png" alt="add-Theme"/>
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                            <img width="42" height="42" src="https://img.icons8.com/fluency/48/export.png" alt="exit"/>
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
