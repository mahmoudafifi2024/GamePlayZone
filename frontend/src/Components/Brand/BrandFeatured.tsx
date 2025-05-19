// src/components/Brand/BrandFeatured.tsx
import React from 'react';
import { Container } from '@mui/material';
import BrandContainer from './BrandContainer';
import SubTitle from '../Utility/SubTitle';

import BrandPic from '../../images/brand.webp'
import BrandPic1 from '../../images/brand1.webp'
import BrandPic2 from '../../images/brand2.webp'
import BrandPic3 from '../../images/brand3.webp'

interface Brand {
id: string;
name: string;
image: string;
}

const BrandFeatured: React.FC = () => {
const brands: Brand[] = [
    { id: '1', name: 'Samsung', image: BrandPic },
    { id: '2', name: 'LG', image: BrandPic1 },
    { id: '2', name: 'OPPO', image: BrandPic2 },
    { id: '3', name: 'Lenovo', image: BrandPic3 }
];

return (
    <Container sx={{ my: 4 }}>
    <SubTitle title="Brands" btntitle="See more" pathText="/allbrand" />
    <BrandContainer brands={brands} />
    </Container>
);
};

export default BrandFeatured;
