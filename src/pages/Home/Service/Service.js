import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <Grid item xs={12} md={4} sx={{ textAlign: "center", my: 10 }}>
            <img src={img} alt="" width="100" />
            <Typography variant="h6" component="div" sx={{ color: 'text.primary', fontWeight: 600, my: 3 }}>
                {name}
            </Typography>
            <Typography variant="body1" component="div" sx={{ color: 'text.secondary', my: 3 }}>
                {description}
            </Typography>
        </Grid>
    );
};

export default Service;