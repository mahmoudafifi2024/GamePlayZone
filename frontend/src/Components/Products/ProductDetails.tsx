import { Box, Grid } from '@mui/material';
import ProductText from "./ProductText";
import ProductGallery from "./ProductGallery";

import Product from "../../images/product-phone.jpeg";
import Product1 from "../../images/product-phone1.jpeg";

const productData = {
  id: '1',
  title: 'iPhone 14 Pro Max',
  description: 'Advanced smartphone with professional camera and powerful performance',
  category: 'Smartphones',
  brand: 'Apple',
  price: 45000,
  priceAfterDiscount: 42000,
  ratingsAverage: 4.8,
  ratingsQuantity: 120,
  colors: ['#FFFFFF', '#FFD700', '#000000', '#8A2BE2', '#FF5733'],
  images: [
    { id: '1', url: Product },
    { id: '1', url: Product1 },
  ],
  specifications: {
    Screen: '6.7 inch',
    Memory: '256 GB',
    Processor: 'A16 Bionic',
    Battery: '4323 mAh'
  }
};

export default function ProductDetails() {
  return (
    <Box sx={{ p: 3, bgcolor: '#fafafa' }}>
      <Grid container spacing={4} alignItems="flex-start">
        {/* Product Gallery - 40% width on md and up */}
        <Grid item xs={12} md={5}>
          <ProductGallery images={productData.images.map(image => image.url)} />
        </Grid>

        {/* Product Text - 60% width on md and up */}
        <Grid item xs={12} md={7}>
          <ProductText product={productData} />
        </Grid>
      </Grid>
    </Box>
  );
}
