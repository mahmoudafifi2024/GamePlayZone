import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

interface Product {
  _id: string;
  title: string;
  imageCover: string;
  price: number;
  ratingsQuantity: number;
}

interface AdminAllProductsCardProps {
  item: Product;
}

const AdminAllProductsCard: React.FC<AdminAllProductsCardProps> = ({ item }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Card
      sx={{
        width: '100%',
        height: 350,
        borderRadius: 3,
        bgcolor: isDark ? 'background.paper' : '#fff',
        boxShadow: isDark
          ? '0 4px 24px 0 rgba(0,0,0,0.3)'
          : '0 4px 24px 0 rgba(60,60,60,0.08)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'box-shadow 0.2s',
        '&:hover': {
          boxShadow: isDark
            ? '0 8px 32px 0 rgba(0,0,0,0.5)'
            : '0 8px 32px 0 rgba(60,60,60,0.15)',
        },
      }}
      elevation={0}
    >
      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
        <Button
          color="error"
          size="small"
          sx={{
            minWidth: 0,
            px: 1.5,
            py: 0.5,
            fontWeight: 500,
            borderRadius: 2,
            bgcolor: isDark ? 'error.dark' : 'error.light',
            color: isDark ? 'grey.100' : 'error.main',
            textTransform: 'none',
            '&:hover': {
              bgcolor: isDark ? 'error.main' : 'error.light',
              color: isDark ? 'grey.900' : 'error.dark',
            },
          }}
        >
          Remove
        </Button>
        <Button
          component={Link}
          to={`/admin/editproduct/${item._id}`}
          color="primary"
          size="small"
          sx={{
            minWidth: 0,
            px: 1.5,
            py: 0.5,
            fontWeight: 500,
            borderRadius: 2,
            bgcolor: isDark ? 'primary.dark' : 'primary.light',
            color: isDark ? 'grey.100' : 'primary.main',
            textTransform: 'none',
            '&:hover': {
              bgcolor: isDark ? 'primary.main' : 'primary.light',
              color: isDark ? 'grey.900' : 'primary.dark',
            },
          }}
        >
          Edit
        </Button>
      </Box>
      {/* Product Image and Details */}
      <Link
        to={`/products/${item._id}`}
        style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}
      >
        <CardMedia
          component="img"
          height="160"
          image={item.imageCover}
          alt={item.title}
          sx={{
            objectFit: 'contain',
            bgcolor: isDark ? 'grey.900' : 'grey.100',
            borderRadius: 2,
            mx: 2,
            mt: 1,
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontWeight: 'bold',
              color: isDark ? 'grey.100' : 'grey.900',
              mb: 1,
              textAlign: 'center',
            }}
          >
            {item.title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 2,
            }}
          >
            <Typography
              variant="body2"
              color={isDark ? 'grey.400' : 'text.secondary'}
            >
              {item.ratingsQuantity} reviews
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="body2"
                sx={{
                  mr: 1,
                  color: isDark ? 'primary.light' : 'primary.dark',
                  fontWeight: 500,
                }}
              >
                EGP
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 'bold',
                  color: isDark ? 'grey.100' : 'grey.900',
                }}
              >
                {item.price}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Link>
    </Card>
  );
};

export default AdminAllProductsCard;
