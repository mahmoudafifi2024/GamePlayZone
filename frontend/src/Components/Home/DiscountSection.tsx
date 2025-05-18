import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import DiscountPic from '../../images/discount.webp';
import DiscountPic2 from '../../images/discount2.webp';
import DiscountPic3 from '../../images/discount3.webp';
import DiscountPic4 from '../../images/discount4.webp';

interface DiscountSectionProps {
  image?: string;
  backgroundColor?: string;
}

const DiscountSection: React.FC<DiscountSectionProps> = () => {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate('/discounts')}
      sx={{
        borderRadius: 2,
        cursor: 'pointer',
        width: '70vw',
        height: '25vh',
        margin: '24px auto',
        display:"flex",
        
      }}
    >
      <Box
        component="img"
        src={DiscountPic}
        alt="discount"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block'
        }}
      />
      <Box
        component="img"
        src={DiscountPic2}
        alt="discount"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block'
        }}
      />
      <Box
        component="img"
        src={DiscountPic3}
        alt="discount"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block'
        }}
      />
      <Box
        component="img"
        src={DiscountPic4}
        alt="discount"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block'
        }}
      />
    </Box>
  );
};

export default DiscountSection;