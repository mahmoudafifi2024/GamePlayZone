import React from 'react';
import { Box, Typography, Checkbox, FormControlLabel, TextField } from '@mui/material';

const SideFilter: React.FC = () => {
  return (
    <Box mt={3}>
      {/* Category Section */}
      <Box display="flex" flexDirection="column" mt={2}>
        <Typography variant="h6" fontWeight="bold">
          Category
        </Typography>

        <FormControlLabel
          control={<Checkbox value="0" />}
          label="All"
          sx={{ mt: 1 }}
        />
        <FormControlLabel
          control={<Checkbox value="1" />}
          label="Electronics"
          sx={{ mt: 1 }}
        />
        <FormControlLabel
          control={<Checkbox value="2" />}
          label="Clothes"
          sx={{ mt: 1 }}
        />
      </Box>

      {/* Brand Section */}
      <Box display="flex" flexDirection="column" mt={4}>
        <Typography variant="h6" fontWeight="bold">
          Brand
        </Typography>

        <FormControlLabel
          control={<Checkbox value="0" />}
          label="All"
          sx={{ mt: 1 }}
        />
        <FormControlLabel
          control={<Checkbox value="1" />}
          label="Samsung"
          sx={{ mt: 1 }}
        />
        <FormControlLabel
          control={<Checkbox value="2" />}
          label="Apple"
          sx={{ mt: 1 }}
        />
      </Box>

      {/* Price Section */}
      <Box mt={4}>
        <Typography variant="h6" fontWeight="bold" mb={1}>
          Price
        </Typography>

        <Box display="flex" alignItems="center" mb={1}>
          <Typography variant="body1" mr={1}>
            From:
          </Typography>
          <TextField
            type="number"
            size="small"
            sx={{ width: 70 }}
            inputProps={{ style: { textAlign: 'center', height: 25 } }}
          />
        </Box>

        <Box display="flex" alignItems="center">
          <Typography variant="body1" mr={1}>
            To:
          </Typography>
          <TextField
            type="number"
            size="small"
            sx={{ width: 70 }}
            inputProps={{ style: { textAlign: 'center', height: 25 } }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SideFilter;
