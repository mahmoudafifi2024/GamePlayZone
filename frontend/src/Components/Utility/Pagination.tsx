import React, { useState } from 'react';
import { Pagination as MuiPagination, PaginationItem, Box } from '@mui/material';

const Pagination: React.FC = () => {
const [page, setPage] = useState(0); // 0-based index
const pageCount = 20; // عدد الصفحات ثابت للاختبار

const handleChange = (_: React.ChangeEvent<unknown>, selectedPage: number) => {
    setPage(selectedPage - 1); // تحويل إلى 0-based index
};

return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
    <MuiPagination
        count={pageCount}
        page={page + 1} // تحويل إلى 1-based index للمكون
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
        sx={{ display: 'inline-flex', justifyContent: 'center' }}
    />
    </Box>
);
};

export default Pagination;
