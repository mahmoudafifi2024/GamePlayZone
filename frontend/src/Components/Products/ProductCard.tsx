import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, IconButton, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

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

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
const [liked, setLiked] = useState(false);

const displayedTitle = product.title.length > 50 
    ? `${product.title.substring(0, 50)}...` 
    : product.title;

return (
    <Card sx={{ 
    minWidth: '15vw',
    maxWidth: 300,
    width: '100%',
    m: 1,
    borderRadius: 3,
    boxShadow: 3,
    boxSizing: 'border-box',
    '@media (max-width: 600px)': {
        minWidth: '45vw'
    }
    }}>
    <Link to={`/products/${product._id}`}>
        <CardMedia
        component="img"
        height="180"
        image={product.imageCover}
        alt={product.title}
        sx={{ 
            objectFit: 'cover',
            borderRadius: '12px 12px 0 0',
            width: '100%'
        }}
        />
    </Link>

    <CardContent sx={{ padding: 2 }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ 
        fontWeight: 600,
        fontSize: '1rem',
        lineHeight: 1.2
        }}>
        {displayedTitle}
        </Typography>
        
        <Box display="flex" alignItems="center" mb={1}>
        <StarIcon sx={{ color: '#FFD700', fontSize: 18, mr: 0.5 }} />
        <Typography variant="body2" color="text.secondary">
            {product.ratingsAverage.toFixed(1) || '0.0'}
        </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
        {product.priceAfterDiscount ? (
            <>
            <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                EGP {product.price}
            </Typography>
            <Typography variant="body1" color="primary" sx={{ fontWeight: 700 }}>
                EGP {product.priceAfterDiscount}
            </Typography>
            </>
        ) : (
            <Typography variant="body1" color="primary" sx={{ fontWeight: 700 }}>
            EGP {product.price}
            </Typography>
        )}
        </Box>
    </CardContent>

    <CardActions disableSpacing sx={{ padding: '0 8px 8px' }}>
        <IconButton
        aria-label="like"
        onClick={() => setLiked(!liked)}
        color={liked ? 'error' : 'default'}
        size="small"
        >
        <FavoriteIcon fontSize="small" />
        </IconButton>
    </CardActions>
    </Card>
);
};

export default ProductCard;
