// src/pages/LoginPage.tsx
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link as MuiLink,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const LoginPage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f0f2f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 400,
          p: 4,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Login
        </Typography>

        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="outlined"
          sx={{ my: 2 }}
          InputProps={{ style: { textAlign: "center" } }}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          sx={{ my: 2 }}
          InputProps={{ style: { textAlign: "center" } }}
        />

        <Button fullWidth variant="contained"  sx={{ mt: 2 }}>
          Login
        </Button>

        <Typography variant="body2" sx={{ mt: 3 }}>
          Don't have an account?{" "}
          <MuiLink component={Link} to="/register" underline="hover" color="error">
            Register here
          </MuiLink>
        </Typography>

        <MuiLink
          component={Link}
          to="/user/forget-password"
          underline="hover"
          color="error"
          sx={{ display: "block", mt: 2 }}
        >
          Forgot your password?
        </MuiLink>

        <MuiLink
          component={Link}
          to="/admin/allproducts"
          underline="hover"
          color="error"
          sx={{ display: "block", mt: 2 }}
        >
          Admin Login
        </MuiLink>

        <MuiLink
          component={Link}
          to="/user/allorders"
          underline="hover"
          color="error"
          sx={{ display: "block", mt: 2 }}
        >
          User Login
        </MuiLink>
      </Paper>

      <ToastContainer />
    </Box>
  );
};

export default LoginPage;
