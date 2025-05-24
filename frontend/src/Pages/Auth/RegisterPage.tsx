// src/pages/RegisterPage.tsx
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

const RegisterPage: React.FC = () => {
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
        maxWidth: 450,
        p: 4,
        borderRadius: 2,
        textAlign: "center",
        }}
    >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
        Register
        </Typography>

        <TextField
        fullWidth
        label="Username"
        type="text"
        variant="outlined"
        sx={{ my: 1 }}
        />
        <TextField
        fullWidth
        label="Email"
        type="email"
        variant="outlined"
        sx={{ my: 1 }}
        />
        <TextField
        fullWidth
        label="Phone"
        type="tel"
        variant="outlined"
        sx={{ my: 1 }}
        />
        <TextField
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
        sx={{ my: 1 }}
        />
        <TextField
        fullWidth
        label="Confirm Password"
        type="password"
        variant="outlined"
        sx={{ my: 1 }}
        />

        <Button fullWidth variant="contained" sx={{ mt: 3 }}>
        Register
        </Button>

        <Typography variant="body2" sx={{ mt: 3 }}>
        Already have an account?{" "}
        <MuiLink component={Link} to="/login" underline="hover" color="error">
            Login here
        </MuiLink>
        </Typography>
    </Paper>

    <ToastContainer />
    </Box>
);
};

export default RegisterPage;
