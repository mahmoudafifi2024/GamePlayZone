    import React from 'react';
    import { Box, Typography } from '@mui/material';

    interface CategoryCardProps {
    title: string;
    img: string;
    background?: string;
    }

    const CategoryCard: React.FC<CategoryCardProps> = ({
    title,
    img,
    background = "#F4F4F4"
    }) => {
    return (
        <Box
        sx={{
            my: 4,
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
        }}
        >
        <Box
            sx={{
            backgroundColor: background,
            borderRadius: 2,
            padding: 2,
            textAlign: 'center',
            maxWidth: 160,
            boxShadow: 1,
            cursor: 'pointer',
            '&:hover': {
                boxShadow: 4,
            }
            }}
        >
            <Box
            sx={{
                width: 140,
                height: 140,
                margin: '0 auto',
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
            <img
                src={img}
                alt={title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            </Box>

            <Typography
            color="primary"
            variant="body1"
            component="p"
            sx={{ mt: 1, fontWeight: 'bold' }}
            >
            {title}
            </Typography>
        </Box>
        </Box>
    );
    };

    export default CategoryCard;
