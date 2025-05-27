import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CategoryCard from './CategoryCard';

import CategoryPic from '../../images/category.webp'
import CategoryPic1 from '../../images/category1.webp'
import CategoryPic2 from '../../images/category2.webp'


interface Category {
id: string;
name: string;
image: string;
}

const CategoryContainer: React.FC = () => {
const categories: Category[] = [
    { id: '1', name: 'Electronics', image: CategoryPic },
    { id: '2', name: 'Electronics', image: CategoryPic1 },
    { id: '3', name: 'Electronics', image: CategoryPic2 },
    { id: '4', name: 'Electronics', image: CategoryPic },
    { id: '5', name: 'Electronics', image: CategoryPic1 },
    { id: '6', name: 'Electronics', image: CategoryPic2 },
    { id: '7', name: 'Electronics', image: CategoryPic },
    { id: '8', name: 'Electronics', image: CategoryPic1 },
    { id: '9', name: 'Electronics', image: CategoryPic2 },
    { id: '10', name: 'Electronics', image: CategoryPic },
    { id: '11', name: 'Electronics', image: CategoryPic1 },
    { id: '12', name: 'Electronics', image: CategoryPic2 },
];

return (
    <Container>
    <Typography variant="h5" mt={3} mb={2}>
        All Categories
    </Typography>
    <Grid container spacing={1} justifyContent="space-between">
        {categories.map(category => (
        <div key={category.id}>
            <CategoryCard
            title={category.name}
            img={category.image}
            background="#F4F4F4"
            />
        </div>
        ))}
    </Grid>
    </Container>
);
};

export default CategoryContainer;
