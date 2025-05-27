import { Container } from '@mui/material';
import BrandContainer from '../../Components/Brand/BrandContainer';

import BrandPic from '../../images/brand.webp';
import BrandPic1 from '../../images/brand1.webp';
import BrandPic2 from '../../images/brand2.webp';
import BrandPic3 from '../../images/brand3.webp';
import Pagination from '../../Components/Utility/Pagination';

interface Brand {
  id: string;
  name: string;
  image: string;
}

const AllBrandPage: React.FC = () => {
  const brandImages = [BrandPic, BrandPic1, BrandPic2, BrandPic3];

  const brandNames = [
    'Samsung', 'LG', 'OPPO', 'Lenovo',
    'Apple', 'Sony', 'Huawei', 'Nokia',
    'Xiaomi', 'OnePlus', 'Asus', 'Dell',
    'HP', 'Acer', 'Microsoft'
  ];

  const brands: Brand[] = brandNames.map((name, index) => ({
    id: (index + 1).toString(),
    name,
    image: brandImages[index % brandImages.length],
  }));

  return (
    <Container sx={{ my: 4 }}>
      <BrandContainer brands={brands} />
      <Pagination  />
    </Container>
  );
};

export default AllBrandPage;
