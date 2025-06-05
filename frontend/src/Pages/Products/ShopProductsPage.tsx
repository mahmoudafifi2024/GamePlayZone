import React from 'react';
import { Container, Grid } from '@mui/material';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import SearchCountResult from '../../Components/Utility/SearchCountResult';
import SideFilter from '../../Components/Utility/SideFilter';
import Pagination from '../../Components/Utility/Pagination'; // Your custom Pagination component

import Product from '../../images/product-phone.jpeg'
import Product1 from '../../images/product-phone1.jpeg'

const ShopProductsPage: React.FC = () => {
const products = [
    { 
    _id: '0', 
    title: 'Product 1', 
    description: 'Description of product 1', 
    price: 100, 
    imageCover: Product, 
    category: 'Electronics', 
    ratingsAverage: 4.5, 
    ratingsQuantity: 10 
    },
    { 
    _id: '1', 
    title: 'Product 1', 
    description: 'Description of product 1', 
    price: 100, 
    imageCover: Product1, 
    category: 'Electronics', 
    ratingsAverage: 4.5, 
    ratingsQuantity: 10 
    },
    { 
    _id: '0', 
    title: 'Product 1', 
    description: 'Description of product 1', 
    price: 100, 
    imageCover: Product, 
    category: 'Electronics', 
    ratingsAverage: 4.5, 
    ratingsQuantity: 10 
    },
    { 
    _id: '1', 
    title: 'Product 1', 
    description: 'Description of product 1', 
    price: 100, 
    imageCover: Product1, 
    category: 'Electronics', 
    ratingsAverage: 4.5, 
    ratingsQuantity: 10 
    },
    { 
    _id: '0', 
    title: 'Product 1', 
    description: 'Description of product 1', 
    price: 100, 
    imageCover: Product, 
    category: 'Electronics', 
    ratingsAverage: 4.5, 
    ratingsQuantity: 10 
    },
    { 
    _id: '1', 
    title: 'Product 1', 
    description: 'Description of product 1', 
    price: 100, 
    imageCover: Product1, 
    category: 'Electronics', 
    ratingsAverage: 4.5, 
    ratingsQuantity: 10 
    },
];

const resultsCount = products.length;

return (
    <div style={{ minHeight: '670px' }}>
    <CategoryHeader />
    <Container maxWidth="lg" sx={{ mt: 2 }}>
        <SearchCountResult title={`There are ${resultsCount} search results`} onClick={() => {}} />

        <Grid gap={10} container spacing={2} sx={{ mt: 1 }}>
        {/* Side filter */}
        <Grid  xs={12} sm={2} md={11} sx={{ display: 'flex' }}>
            <SideFilter />
        </Grid>

        {/* Products list */}
        <Grid xs={12} sm={10} md={11}>
            <CardProductsContainer 
            products={products} 
            title="Available Products" 
            btntitle="Show More" 
            />
        </Grid>
        </Grid>

        <Pagination/>
    </Container>
    </div>
);
};

export default ShopProductsPage;
