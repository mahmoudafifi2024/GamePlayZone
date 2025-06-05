import React from 'react';
import Container from '@mui/material/Container';
import ChoosePayMethod from '../../Components/Checkout/ChoosePayMethoud';

const ChoosePayMethodPage: React.FC = () => {
return (
    <Container sx={{ minHeight: '670px' }}>
    <ChoosePayMethod />
    </Container>
);
};

export default ChoosePayMethodPage;
