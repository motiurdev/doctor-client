import React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Container>
            <Typography variant="body1" component="div" gutterBottom sx={{ color: 'text.secondary', my: 6, textAlign: "center" }}>
                Copyright 2021 All righs Reserved.
            </Typography>
        </Container>
    );
};

export default Footer;