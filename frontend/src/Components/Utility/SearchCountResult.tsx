import React, { useState } from 'react';
import type { MouseEvent } from 'react';
import { Box, Typography,  Menu, MenuItem } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort'; // يمكنك استبدالها بصورة إذا تحب

type SearchCountResultProps = {
title: string;
onClick: () => void;
};

const SearchCountResult: React.FC<SearchCountResultProps> = ({ title, onClick }) => {
const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
const open = Boolean(anchorEl);

const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
};

const handleClose = () => {
    setAnchorEl(null);
};

const handleMenuItemClick = (key: string) => {
    localStorage.setItem('sortType', key);
    onClick();
    handleClose();
};

return (
    <Box 
    display="flex" 
    justifyContent="space-between" 
    alignItems="center" 
    pt={3} 
    px={2}
    width="75vw"
    >
    <Typography variant="subtitle1">{title}</Typography>

    <Box display="flex" alignItems="center">
        <Typography 
        variant="body1" 
        sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} 
        onClick={handleClick}
        aria-controls={open ? 'sort-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        >
        <SortIcon sx={{ mr: 1 }} />
        Sort by
        </Typography>

        <Menu
        id="sort-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        >
        <MenuItem onClick={() => handleMenuItemClick('')}>No Sorting</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('best_selling')}>Best Selling</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('top_rated')}>Top Rated</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('price_low_to_high')}>Price: Low to High</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('price_high_to_low')}>Price: High to Low</MenuItem>
        </Menu>
    </Box>
    </Box>
);
};

export default SearchCountResult;
