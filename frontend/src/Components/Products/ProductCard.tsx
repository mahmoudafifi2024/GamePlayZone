import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, IconButton, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

// ProductCard Props interface
interface ProductCardProps {
product: {
    _id: string;
    title: string;
    imageCover: string;
    ratingsAverage: number;
    price: number;
    priceAfterDiscount?: number;
};
}

// ProductCard component
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
const [liked, setLiked] = useState(false);

// Truncate long titles for better appearance
const displayedTitle =
    product.title.length > 50 ? `${product.title.substring(0, 50)}...` : product.title;

return (
    <Card sx={{ maxWidth: 270, m: 1, borderRadius: 3, boxShadow: 3 }}>
    {/* Product image */}
    <Link to={`/products/${product._id}`}>
        <CardMedia
        component="img"
        height="180"
        image={product.imageCover}
        alt={product.title}
        sx={{ objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
        />
    </Link>

    {/* Product content */}
    <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600 }}>
        {displayedTitle}
        </Typography>
        <Box display="flex" alignItems="center" mb={1}>
        <StarIcon sx={{ color: '#FFD700', fontSize: 18, mr: 0.5 }} />
        <Typography variant="body2" color="text.secondary">
            {product.ratingsAverage || 0}
        </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
        {product.priceAfterDiscount ? (
            <>
            <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                {product.price} EGP
            </Typography>
            <Typography variant="body1" color="primary" sx={{ fontWeight: 700 }}>
                {product.priceAfterDiscount} EGP
            </Typography>
            </>
        ) : (
            <Typography variant="body1" color="primary" sx={{ fontWeight: 700 }}>
            {product.price} EGP
            </Typography>
        )}
        </Box>
    </CardContent>

    {/* Like button */}
    <CardActions disableSpacing>
        <IconButton
        aria-label="like"
        onClick={() => setLiked(!liked)}
        color={liked ? 'error' : 'default'}
        >
        <FavoriteIcon />
        </IconButton>
    </CardActions>
    </Card>
);
};

export default ProductCard;
