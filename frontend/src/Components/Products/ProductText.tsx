import React from 'react';
import { Box, Typography, Button, Stack, Rating } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface ProductDetails {
id: string;
title: string;
description: string;
brand: string;
price: number;
colors: string[];
images: { id: string; url: string }[];
ratingsAverage?: number; 
}

interface ProductTextProps {
product: ProductDetails;
}

const ProductText: React.FC<ProductTextProps> = ({ product }) => {
return (
    <Box sx={{ p: 3 }}>
    {/* Title */}
    <Typography variant="h5" fontWeight="bold" gutterBottom>
        {product.title}
    </Typography>

    {/* Brand */}
    <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Brand: <Box component="span" fontWeight="medium">{product.brand}</Box>
    </Typography>

    {/* Rating */}
    {product.ratingsAverage !== undefined && (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Rating
            name="read-only-rating"
            value={product.ratingsAverage}
            precision={0.1}
            readOnly
            size="medium"
        />
        <Typography variant="body2" sx={{ ml: 1 }}>
            {product.ratingsAverage.toFixed(1)} ★
        </Typography>
        </Box>
    )}

    {/* Description */}
    <Typography variant="body1" sx={{ mb: 3 }}>
        {product.description}
    </Typography>

    {/* Colors */}
    <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
        {product.colors.map((color, index) => (
        <Box
            key={index}
            sx={{
            bgcolor: color,
            width: 30,
            height: 30,
            borderRadius: '50%',
            border: '1px solid #ccc',
            cursor: 'pointer',
            }}
            title={`Color ${index + 1}`}
        />
        ))}
    </Box>

    {/* Price and Add to Cart */}
    <Stack direction="row" alignItems="center" spacing={2}>
        <Typography variant="h5" fontWeight="bold">
        {product.price.toLocaleString()} EGP
        </Typography>

        <Button variant="contained" color="primary" startIcon={<ShoppingCartIcon />}>
        Add to Cart
        </Button>
    </Stack>
    </Box>
);
};

export default ProductText;
