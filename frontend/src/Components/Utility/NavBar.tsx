import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
AppBar,
Box,
Toolbar,
IconButton,
Typography,
InputBase,
Badge,
MenuItem,
Menu,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../../Styles/Components/Utility/NavBar.css';

// Props type for the NavBar component
type NavBarProps = {
mode: 'light' | 'dark';
toggleTheme: () => void;
};

// Styled component for the search bar container
const Search = styled('div')(({ theme }) => ({
position: 'relative',
borderRadius: theme.shape.borderRadius,
backgroundColor: alpha(theme.palette.common.white, 0.15),
'&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
},
marginRight: theme.spacing(2),
marginLeft: 0,
width: '100%',
[theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
},
}));

// Wrapper for the search icon inside the input
const SearchIconWrapper = styled('div')(({ theme }) => ({
padding: theme.spacing(0, 2),
height: '100%',
position: 'absolute',
pointerEvents: 'none',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
}));

// Styled input field inside the search bar
const StyledInputBase = styled(InputBase)(({ theme }) => ({
color: 'inherit',
'& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
    width: '20ch',
    },
},
}));

// Main NavBar component
export default function PrimarySearchAppBar({ mode, toggleTheme }: NavBarProps) {
// State for desktop profile menu
const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

// State for mobile menu
const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

const isMenuOpen = Boolean(anchorEl);
const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

// Open desktop profile menu
const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
};

// Close mobile menu
const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
};

// Close both menus
const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
};

// Open mobile menu
const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
};

// Desktop profile menu
const menuId = 'primary-search-account-menu';
const renderMenu = (
    <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={menuId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMenuOpen}
    onClose={handleMenuClose}
    >
    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
);

// Mobile version of the menu
const mobileMenuId = 'primary-search-account-menu-mobile';
const renderMobileMenu = (
    <Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
    >
    <MenuItem>
        <IconButton size="large" color="inherit">
        <Badge badgeContent={3} color="error">
            <ShoppingCartIcon />
        </Badge>
        </IconButton>
        <p>Cart</p>
    </MenuItem>
    <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
        >
        <AccountCircle />
        </IconButton>
        <p>Profile</p>
    </MenuItem>
    </Menu>
);

// Render the AppBar (top navigation bar)
return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
        <Toolbar>
        {/* Brand name/logo */}
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
        >
            MUI
        </Typography>

        {/* Search input field */}
        <Search>
            <SearchIconWrapper>
            <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            />
        </Search>

        {/* Spacer to push icons to the right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Desktop icons: theme switch, cart, profile */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Theme toggle button */}
            <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

            {/* Shopping cart button with badge */}
            <IconButton size="large" color="inherit">
            <Badge badgeContent={3} color="error">
                <ShoppingCartIcon />
            </Badge>
            </IconButton>

            {/* Profile/account icon */}
            <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            >
            <AccountCircle />
            </IconButton>
        </Box>

        {/* Mobile view: more icon for menu */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
            >
            <MoreIcon />
            </IconButton>
        </Box>
        </Toolbar>
    </AppBar>

    {/* Render the mobile and desktop menus */}
    {renderMobileMenu}
    {renderMenu}
    </Box>
);
}
