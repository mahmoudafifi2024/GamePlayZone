// src/components/Brand/BrandCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

interface BrandCardProps {
img: string;
name?: string;
}

const BrandCard: React.FC<BrandCardProps> = ({ img, name }) => {
return (
    <Box 
        sx={{
            width: {
                xs: '50%',
                sm: '33.33%',
                md: '25%',
                lg: '16.66%'
            },
            display: 'flex',
            justifyContent: 'center',
            p: 1
        }}
    >
    <Card
        sx={{
        width: 140,
        height: 170,
        borderRadius: 3,
        bgcolor: '#fff',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': { transform: 'scale(1.05)' },
        }}
        elevation={3}
    >
        <Box mb={1}>
        <Avatar
            src={img}
            alt={name || 'brand'}
            sx={{
            width: 80,
            height: 80,
            bgcolor: '#f5f5f5',
            border: '2px solid #e0e0e0',
            }}
        />
        </Box>
        {name && (
        <CardContent sx={{ p: 0 }}>
            <Typography variant="body2" textAlign="center" fontWeight="bold">
            {name}
            </Typography>
        </CardContent>
        )}
    </Card>
    </Box>
);
};

export default BrandCard;
