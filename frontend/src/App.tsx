import { useState, useEffect, lazy, Suspense } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getTheme } from './theme';
import NavBar from './Components/Utility/NavBar';
import Footer from './Components/Utility/Footer';


// Lazy Loading for performance optimization
const HomePage = lazy(() => import("./Pages/Home/HomePage"));
const LoginPage = lazy(() => import('./Pages/Auth/LoginPage'));
const RegisterPage = lazy(() => import('./Pages/Auth/RegisterPage'));
const AllCategoryPage = lazy(() => import('./Pages/Category/AllCategoryPage'));
const AllBrandPage = lazy(() => import('./Pages/Brand/AllBrandPage'));
const ShopProductsPage = lazy(() => import("./Pages/Products/ShopProductsPage"));
const ProductDetailsPage = lazy(() => import('./Pages/Products/ProductDetailsPage'));
const CartPage = lazy(() => import('./Pages/Cart/CartPage'));
// const ChoosePayMethoudPage = lazy(() => import("./Page/Checkout/ChoosePayMethodPage"));

// // Admin Pages
// const AdminAllProductsPage = lazy(() => import("./Page/Admin/AdminAllProductsPage"));
// const AdminAllOrdersPage = lazy(() => import("./Page/Admin/AdminAllOrdersPage"));
// const AdminOrderDetalisPage = lazy(() => import("./Page/Admin/AdminOrderDetailsPage"));
// const AdminAddBrandPage = lazy(() => import("./Page/Admin/AdminAddBrandPage"));
// const AdminAddCategoryPage = lazy(() => import("./Page/Admin/AdminAddCategoryPage"));
// const AdminAddSubCategoryPage = lazy(() => import("./Page/Admin/AdminAddSubCategoryPage"));
// const AdminAddProductsPage = lazy(() => import("./Page/Admin/AdminAddProductsPage"));
// const AdminEditProductsPage = lazy(() => import("./Page/Admin/AdminEditProductsPage"));
// const AdminAddCouponPage = lazy(() => import("./Page/Admin/AdminAddCouponPage"));
// const AdminEditCouponPage = lazy(() => import("./Page/Admin/AdminEditCouponPage"));

// // User Pages
// const UserAllOrdersPage = lazy(() => import("./Page/User/UserAllOrdersPage"));
// const UserFavoriteProductsPage = lazy(() => import("./Page/User/UserFavoriteProductsPage"));
// const UserAllAddresPage = lazy(() => import("./Page/User/UserAllAddressPage"));
// const UserAddAddressPage = lazy(() => import("./Page/User/UserAddAddressPage"));
// const UserEditAddressPage = lazy(() => import("./Page/User/UserEditAddressPage"));
// const UserProfilePage = lazy(() => import("./Page/User/UserProfilePage"));

// Login and Recovery Pages
// const ForgetPasswordPage = lazy(() => import("./Page/Auth/ForgetPasswordPage"));
// const VerifyPasswordPage = lazy(() => import("./Page/Auth/VerifyPasswordPage"));
// const ResetPasswordPage = lazy(() => import("./Page/Auth/ResetPasswordPage"));

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = getTheme(mode);

  return (
      <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <NavBar mode={mode} toggleTheme={toggleTheme} />
        <Suspense fallback={<div>Loading...</div>}></Suspense>
        <Routes>
          {/* Home Page */}
          <Route index element={<HomePage />} />
          {/* Login and Register */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
            {/* Store and Products */}
            <Route path="/allcategory" element={<AllCategoryPage />} />
            <Route path="/allbrand" element={<AllBrandPage />} />
            <Route path="/products" element={<ShopProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            {/* <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />} /> */}
        </Routes>
        <Footer />
    </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
