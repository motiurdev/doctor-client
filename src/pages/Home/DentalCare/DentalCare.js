import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import dentalImg from '../../../images/treatment.png'
import Box from '@mui/material/Box';

const DentalCare = () => {
    return (
        <Box sx={{ mb: 10 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={dentalImg} style={{ width: "100%" }} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ mt: 5 }}>
                        <Box>
                            <Typography variant="h4" component="div" gutterBottom sx={{ my: 4, fontWeight: 600, color: 'success.main' }}>
                                Exceptional Dental Care, on Your Terms
                            </Typography>
                            <Typography variant="body1" component="div" gutterBottom sx={{ color: 'text.secondary', my: 4, lineHeight: 2 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, velit magnam quia placeat quod maxime ut quae consequuntur nihil perferendis, aperiam repellat libero tempora corporis magni dolorem iste odit provident porro? Quas saepe inventore dolor assumenda facilis repellendus porro soluta.
                            </Typography>
                            <Button variant="contained">Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default DentalCare;