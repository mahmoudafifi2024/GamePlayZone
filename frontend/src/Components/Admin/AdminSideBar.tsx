import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 250;

const menuItems = [
  { id: 'orders', title: 'Orders', path: '/admin/allorders', icon: <AssignmentIcon /> },
  { id: 'products', title: 'Products', path: '/admin/allproducts', icon: <InventoryIcon /> },
  { id: 'categories', title: 'Categories', path: '/admin/addcategory', icon: <CategoryIcon /> },
  { id: 'subcategories', title: 'Subcategories', path: '/admin/addsubcategory', icon: <SubtitlesIcon /> },
  { id: 'brands', title: 'Brands', path: '/admin/addbrand', icon: <LocalOfferIcon /> },
  { id: 'addproduct', title: 'Add Product', path: '/admin/addproduct', icon: <AddBoxIcon /> },
  { id: 'coupons', title: 'Coupons', path: '/admin/coupons', icon: <CardGiftcardIcon /> }
];

const AdminSideBar: React.FC = () => {
  const location = useLocation();
  const theme = useTheme();

  // Choose background and text based on dark/light mode
  const isDark = theme.palette.mode === 'dark';

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          // Dynamic background for dark/light mode
          background: isDark
            ? 'linear-gradient(135deg, #23272f 70%, #181c22 100%)'
            : 'linear-gradient(135deg, #f8fafc 60%, #e3e6ee 100%)',
          borderRight: 'none',
          boxShadow: isDark
            ? '2px 0 8px 0 rgba(0,0,0,0.4)'
            : '2px 0 8px 0 rgba(60,60,60,0.06)'
        }
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Logo and Title */}
        <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            component="img"
            src="/logo192.png"
            alt="Admin Logo"
            sx={{ width: 40, height: 40, borderRadius: '50%' }}
          />
          <Typography variant="h6" fontWeight="bold" color="primary">
            Admin Panel
          </Typography>
        </Box>
        <Divider sx={{ bgcolor: isDark ? 'grey.800' : 'grey.300' }} />
        {/* Menu List */}
        <List sx={{ flexGrow: 1 }}>
          {menuItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={location.pathname === item.path}
                sx={{
                  borderRadius: 2,
                  mx: 1,
                  my: 0.5,
                  color: location.pathname === item.path
                    ? 'primary.main'
                    : isDark ? 'grey.200' : 'text.primary',
                  backgroundColor: location.pathname === item.path
                    ? (isDark ? 'rgba(25, 118, 210, 0.16)' : 'rgba(25, 118, 210, 0.08)')
                    : 'transparent',
                  '&:hover': {
                    backgroundColor: isDark
                      ? 'rgba(25, 118, 210, 0.24)'
                      : 'rgba(25, 118, 210, 0.15)',
                    color: 'primary.main'
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    color: location.pathname === item.path
                      ? 'primary.main'
                      : isDark ? 'grey.400' : 'text.secondary',
                    minWidth: 36
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      fontWeight={location.pathname === item.path ? 'bold' : 'medium'}
                    >
                      {item.title}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ bgcolor: isDark ? 'grey.800' : 'grey.300' }} />
        {/* Footer or User Info */}
        <Box sx={{ p: 2 }}>
          <Typography
            variant="caption"
            color={isDark ? 'grey.500' : 'text.secondary'}
            align="center"
            display="block"
          >
            &copy; {new Date().getFullYear()} Admin Dashboard
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default AdminSideBar;
