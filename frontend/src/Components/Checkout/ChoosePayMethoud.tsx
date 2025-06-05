import React from 'react';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

interface PaymentMethod {
id: string;
name: string;
value: string;
}

interface OrderSummary {
totalPrice: number;
currency: string;
}

const ChoosePayMethod: React.FC = () => {
const paymentMethods: PaymentMethod[] = [
    {
    id: 'credit',
    name: 'Pay by Credit Card',
    value: 'credit'
    },
    {
    id: 'cash',
    name: 'Cash on Delivery',
    value: 'cash'
    }
];

const orderSummary: OrderSummary = {
    totalPrice: 34000,
    currency: 'EGP'
};

// State for selected payment method
const [selectedMethod, setSelectedMethod] = React.useState<string>(paymentMethods[0].value);

const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(event.target.value);
};

const handleCheckout = () => {
    // Handle checkout logic here
    alert(`Proceeding with ${selectedMethod} payment`);
};

return (
    <Box>
    {/* Title */}
    <Typography variant="h5" sx={{ pt: 5, mb: 2 }}>
        Choose Payment Method
    </Typography>

    {/* Payment Methods */}
    <Paper elevation={2} sx={{ my: 3, px: 3, py: 2 }}>
        <FormControl component="fieldset">
        <RadioGroup
            name="paymentMethod"
            value={selectedMethod}
            onChange={handlePaymentMethodChange}
        >
            {paymentMethods.map((method) => (
            <FormControlLabel
                key={method.id}
                value={method.value}
                control={<Radio />}
                label={method.name}
            />
            ))}
        </RadioGroup>
        </FormControl>
    </Paper>

    {/* Order Summary and Checkout Button */}
    <Grid container justifyContent="flex-end" alignItems="center" spacing={2}>
        <Grid >
        <Box
            sx={{
            display: 'inline-block',
            border: '1px solid #ccc',
            borderRadius: 1,
            px: 2,
            py: 1,
            fontWeight: 'bold',
            bgcolor: '#fafafa'
            }}
        >
            {orderSummary.totalPrice} {orderSummary.currency}
        </Box>
        </Grid>
        <Grid>
        <Button
            variant="contained"
            color="primary"
            sx={{ px: 4, py: 1.5, fontWeight: 'bold' }}
            onClick={handleCheckout}
        >
            Complete Purchase
        </Button>
        </Grid>
    </Grid>
    </Box>
);
};

export default ChoosePayMethod;
