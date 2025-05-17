import React from 'react';
import { Container, Box } from '@mui/material';
import CategoryCard from '../Category/CategoryCard';
import SubTitle from '../Utility/SubTitle';

import CategoryPic from '../../images/category.webp'
import CategoryPic1 from '../../images/category1.webp'
import CategoryPic2 from '../../images/category2.webp'

interface Category {
  id: string;
  name: string;
  image: string;
}

const HomeCategory: React.FC = () => {
  const categories: Category[] = [
    {
      id: '1',
      name: 'TV',
      image: CategoryPic,
    },
    {
      id: '2',
      name: 'Mobile',
      image: CategoryPic1,
    },
    {
      id: '3',
      name: 'Laptop',
      image: CategoryPic2,
    }
  ];

  return (
    <Container sx={{ py: 4 }}>
      <SubTitle title="Main Categories" btntitle="See All" pathText="/categories" />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 3,
          mt: 3,
        }}
      >
        {categories.map((category) => (
          <Box key={category.id} sx={{ display: 'flex', justifyContent: 'center' }}>
            <CategoryCard
              title={category.name}
              img={category.image}
              background="#F4F4F4"
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default HomeCategory;
