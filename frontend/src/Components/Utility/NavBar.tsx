// src/Components/Utility/NavBar.tsx

import React from 'react';
import {
AccountCircle,
ShoppingCart,
LightMode,
DarkMode,
MoreVert,
} from '@mui/icons-material';
import {
AppBar,
Badge,
Box,
Drawer,
IconButton,
List,
ListItem,
ListItemButton,
ListItemIcon,
ListItemText,
Toolbar,
Typography,
Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';

type NavBarProps = {
mode: 'light' | 'dark';
toggleTheme: () => void;
};

export default function PrimarySearchAppBar({ mode, toggleTheme }: NavBarProps) {
const [drawerOpen, setDrawerOpen] = React.useState(false);

return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/">
            <Typography variant="h6" noWrap component="div">
            <img src={Logo} alt="Logo" height={40} />
            </Typography>
        </Link>

        {/* Right side for mobile */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
            <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'light' ? <LightMode /> : <DarkMode />}
            </IconButton>

            <IconButton onClick={() => setDrawerOpen(true)} color="inherit">
            <MoreVert />
            </IconButton>
        </Box>

        {/* Right side for desktop */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
            <Typography variant="button">Login</Typography>
            </Link>
            <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
            <Typography variant="button">Register</Typography>
            </Link>

            <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'light' ? <LightMode /> : <DarkMode />}
            </IconButton>

            <IconButton size="large" color="inherit">
            <Badge badgeContent={3} color="error">
                <ShoppingCart />
            </Badge>
            </IconButton>

            <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            color="inherit"
            >
            <AccountCircle />
            </IconButton>
        </Box>
        </Toolbar>
    </AppBar>

    {/* Drawer for mobile menu */}
    <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
    >
        <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={() => setDrawerOpen(false)}
        >
        <List>
            <ListItem disablePadding>
            <ListItemButton component={Link} to="/login">
                <ListItemText primary="Login" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component={Link} to="/register">
                <ListItemText primary="Register" />
            </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
            <ListItemButton component={Link} to="/cart">
                <ListItemIcon>
                <ShoppingCart />
                </ListItemIcon>
                <ListItemText primary="Cart" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component={Link} to="/user/profile">
                <ListItemIcon>
                <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component={Link} to="/admin/allproducts">
                <ListItemText primary="Dashboard" />
            </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem disablePadding>
            <ListItemButton
                component={Link}
                to="/logout"
                sx={{
                bgcolor: 'error.main',
                color: 'white',
                '&:hover': {
                    bgcolor: 'error.dark',
                },
                }}
            >
                <ListItemText primary="Logout" />
            </ListItemButton>
            </ListItem>
        </List>
        </Box>
    </Drawer>
    </Box>
);
}
