import React from 'react';
import { Pagination as MuiPagination, PaginationItem } from '@mui/material';

interface PaginationProps {
pageCount: number;
onPageChange?: (selectedPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount = 0, onPageChange }) => {
const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    if (onPageChange) {
    onPageChange(page - 1); // Convert to 0-based index if needed
    }
};

return (
    <MuiPagination
    count={pageCount}
    onChange={handleChange}
    color="primary"
    shape="rounded"
    showFirstButton
    showLastButton
    siblingCount={1}
    boundaryCount={1}
    renderItem={(item) => (
        <PaginationItem
        {...item}
        components={{ previous: () => <>Previous</>, next: () => <>Next</> }}
        />
    )}
    sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}
    />
);
};

export default Pagination;
