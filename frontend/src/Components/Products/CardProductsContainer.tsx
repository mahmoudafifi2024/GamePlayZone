import React from "react";
import { Grid, Box, Container } from "@mui/material";
import ProductCard from "./ProductCard";

import Product from "../../images/product-phone.jpeg";
import Product1 from "../../images/product-phone1.jpeg";
import SubTitle from "../Utility/SubTitle";

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
];

// Use provided products or default ones
const displayProducts = products.length > 0 ? products : defaultProducts;

return (
    <Container sx={{ py: 4 }}>
    {/* Section title and optional button */}
    <SubTitle title="Products" btntitle="See more" pathText="/products" />

    {/* Products grid */}
    <Box
         sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
            mt: 3,
          }}
    >
        {displayProducts.map((product) => (
        <Box item xs={12} sm={6} md={4} key={product._id}>
            <ProductCard product={product} />
        </Box>
        ))}
    </Box>
    </Container>
);
};

export default CardProductsContainer;
