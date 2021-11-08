import React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ my: 5 }}>
            <Container>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" component="div" sx={{ color: 'info.main', fontWeight: 600, my: 3 }}>
                        OUR SERVICS
                    </Typography>
                    <Typography variant="h4" component="div" sx={{ fontWeight: 600, color: 'success.main' }}>
                        Servies We Provide
                    </Typography>
                </Box>
                <Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={4}>
                            {
                                services.map(service => <Service
                                    key={service.name}
                                    service={service}
                                ></Service>)
                            }
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Services;