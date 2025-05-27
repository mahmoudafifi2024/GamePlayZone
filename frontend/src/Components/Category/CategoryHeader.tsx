import React from 'react';
import { Container, Box, Typography } from '@mui/material';

interface Category {
id: string;
name: string;
isActive?: boolean;
}

const CategoryHeader: React.FC = () => {
const categories: Category[] = [
    { id: 'all', name: 'All', isActive: true },
    { id: 'electronics', name: 'Electronics' },
    { id: 'clothes', name: 'Clothes' },
    { id: 'electrical', name: 'Electrical' },
    { id: 'sales', name: 'Sales' },
    { id: 'more', name: 'More' }
];

return (
    <Box className="cat-header" sx={{ py: 2, bgcolor: 'background.paper' }}>
    <Container maxWidth="lg">
        <Box 
        display="flex" 
        flexWrap="wrap" 
        justifyContent="flex-start" 
        gap={2}
        >
        {categories.map((category) => (
            <Typography
            key={category.id}
            variant="subtitle1"
            sx={{
                cursor: 'pointer',
                fontWeight: category.isActive ? 'bold' : 'normal',
                color: category.isActive ? 'primary.main' : 'text.primary',
                '&:hover': {
                color: 'primary.dark',
                },
                userSelect: 'none',
            }}
            >
            {category.name}
            </Typography>
        ))}
        </Box>
    </Container>
    </Box>
);
};

export default CategoryHeader;
