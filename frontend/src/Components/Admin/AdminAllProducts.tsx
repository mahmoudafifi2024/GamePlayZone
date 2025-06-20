import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import AdminAllProductsCard from './AdminAllProductsCard';

interface Product {
_id: string;
title: string;
description: string;
price: number;
imageCover: string;
category: string;
ratingsQuantity: number;
ratingsAverage: number;
}

const products: Product[] = [
{
    _id: "1",
    title: "iPhone 14 Pro Max",
    description: "Advanced smartphone",
    price: 45000,
    imageCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNEfTLUZ8pYj5klfPNQLbMJNaUdUO89AgdeQ&s",
    category: "Phones",
    ratingsQuantity: 120,
    ratingsAverage: 4.5
},
{
    _id: "2",
    title: "Dell XPS Laptop",
    description: "Professional laptop",
    price: 35000,
    imageCover: "https://2.wlimg.com/product_images/bc-full/2023/1/10884378/dell-latitude-5590-intel-core-i7-8th-gen-laptop-1674889593-6737781.jpeg",
    category: "Laptops",
    ratingsQuantity: 85,
    ratingsAverage: 4.3
}
];

const AdminAllProducts: React.FC = () => {
return (
    <div>
    <Typography variant="h5" sx={{ mb: 2 }}>
        Manage All Products
    </Typography>
    <Grid container spacing={2} alignItems="stretch">
        {products.map((item) => (
        <Box 
            key={item._id}
            sx={{
                width: {
                    xs: '100%',
                    sm: '50%',
                    md: '41.66%',
                    lg: '33.33%'
                },
                p: 1
            }}
        >
            <AdminAllProductsCard item={item} />
        </Box>
        ))}
    </Grid>
    </div>
);
};

export default AdminAllProducts;
