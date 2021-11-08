import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import bannerImg from '../../../images/bg.png'
import bannerChair from '../../../images/chair.png'

const Banner = () => {
    const bannerHeight = {
        height: "100vh",
        background: `url(${bannerImg})`,
        backgroundSize: "cover"
    }

    const verticalAlign = {
        display: "flex",
        alignItems: 'center',
        height: "100vh"
    }
    return (
        <Box style={bannerHeight}>
            <Container>
                <Grid container spacing={2} style={verticalAlign}>
                    <Grid item xs={12} md={6} >
                        <Box>
                            <Typography variant="h3" component="div" sx={{ color: 'text.primary', fontWeight: 600 }}>
                                Your New Smile <br />
                                Starts Here
                            </Typography>
                            <Typography variant="body1" component="div" gutterBottom sx={{ color: 'text.secondary', my: 4 }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi nemo error nobis consequatur. Eos, fugit doloribus laudantium illo delectus sunt.
                            </Typography>
                            <Button variant="contained">GET APPOINTMENT</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={bannerChair} style={{ width: "100%" }} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;