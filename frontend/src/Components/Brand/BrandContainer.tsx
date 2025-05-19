// src/components/Brand/BrandContainer.tsx
import React from 'react';
import { Grid, Container } from '@mui/material';
import BrandCard from './BrandCard';

interface Brand {
id: string;
name: string;
image: string;
}

interface BrandContainerProps {
brands: Brand[];
}

const BrandContainer: React.FC<BrandContainerProps> = ({ brands }) => {
return (
    <Container sx={{ mt: 2 }}>
    <Grid container spacing={2} justifyContent="center">
        {brands.map((brand) => (
        <BrandCard key={brand.id} img={brand.image} name={brand.name} />
        ))}
    </Grid>
    </Container>
);
};

export default BrandContainer;
