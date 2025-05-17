import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface SubTitleProps {
title: string;
btntitle?: string;
pathText?: string;
}

const SubTitle: React.FC<SubTitleProps> = ({ title, btntitle, pathText }) => {
return (
    <Box display="flex" justifyContent="space-between" alignItems="center" pt={4}>
    <Typography variant="h6" component="h2">
        {title}
    </Typography>
    {btntitle && pathText && typeof pathText === 'string' && (
        <Button
        component={RouterLink}
        to={pathText}
        variant="outlined"
        size="small"
        sx={{ textTransform: 'none' }}
        >
        {btntitle}
        </Button>
    )}
    </Box>
);
};

export default SubTitle;
