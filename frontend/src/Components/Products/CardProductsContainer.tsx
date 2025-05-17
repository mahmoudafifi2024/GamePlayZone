import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

import Product from "../../images/product-phone.jpeg";
import Product1 from "../../images/product-phone1.jpeg";

// Product interface
interface Product {
_id: string;
title: string;
description: string;
price: number;
priceAfterDiscount?: number;
imageCover: string;
category: string;
ratingsAverage: number;
ratingsQuantity: number;
}

// CardProductsContainer Props interface
interface CardProductsContainerProps {
title?: string;
btntitle?: string;
pathText?: string;
products?: Product[];
}

// CardProductsContainer component
const CardProductsContainer: React.FC<CardProductsContainerProps> = ({
title,
btntitle,
pathText,
products = [],
}) => {
// Default products for demo purposes
const defaultProducts: Product[] = [
    {
    _id: "0",
    title: "iPhone 14 Pro Max",
    description: "Advanced smartphone",
    price: 45000,
    priceAfterDiscount: 42000,
    imageCover: Product,
    category: "Phones",
    ratingsAverage: 4.5,
    ratingsQuantity: 120,
    },
    {
    _id: "1",
    title: "iPhone 14 Pro Max",
    description: "Advanced smartphone",
    price: 45000,
    priceAfterDiscount: 42000,
    imageCover: Product1,
    category: "Phones",
    ratingsAverage: 4.5,
    ratingsQuantity: 120,
    },
    {
    _id: "0",
    title: "iPhone 14 Pro Max",
    description: "Advanced smartphone",
    price: 45000,
    priceAfterDiscount: 42000,
    imageCover: Product,
    category: "Phones",
    ratingsAverage: 4.5,
    ratingsQuantity: 120,
    },
    {
    _id: "1",
    title: "iPhone 14 Pro Max",
    description: "Advanced smartphone",
    price: 45000,
    priceAfterDiscount: 42000,
    imageCover: Product1,
    category: "Phones",
    ratingsAverage: 4.5,
    ratingsQuantity: 120,
    }
];

// Use provided products or default ones
const displayProducts = products.length > 0 ? products : defaultProducts;

return (
    <Box sx={{ my: 4 }}>
    {/* Section title and optional button */}
    {title && (
        <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
        >
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {title}
        </Typography>
        {btntitle && pathText && (
            <Button
            component={Link}
            to={pathText}
            variant="contained"
            color="primary"
            size="small"
            sx={{ borderRadius: 2 }}
            >
            {btntitle}
            </Button>
        )}
        </Box>
    )}

    {/* Products grid */}
    <Grid
        container
        spacing={5}
        sx={{
        display: "flex",
        flexWrap: "wrap", // flex-wrap: wrap
        justifyContent: "center", // justify-content: flex-start
        alignContent: "flex-start", // align-content: flex-start
        }}
    >
        {displayProducts.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product._id}>
            <ProductCard product={product} />
        </Grid>
        ))}
    </Grid>
    </Box>
);
};

export default CardProductsContainer;
