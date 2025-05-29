import React from 'react';
import { Grid, Box, Typography, Avatar, Rating } from '@mui/material';

interface Review {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  comment: string;
  date: string;
}

interface RateItemProps {
  review: Review;
}

const RateItem: React.FC<RateItemProps> = ({ review }) => {
  return (
    <Box
      sx={{
        border: '1px solid #ddd',
        borderRadius: 2,
        padding: 2,
        marginY: 2,
        maxWidth: 600,
        backgroundColor: '#fff',
      }}
      className="review-card"
    >
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Avatar alt={review.user.name} src={review.user.avatar} />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="div" fontWeight="medium">
            {review.user.name}
          </Typography>
        </Grid>
      </Grid>

      <Box mt={1}>
        <Rating
          name="read-only"
          value={review.rating}
          readOnly
          size="small"
          precision={0.5}
          sx={{ color: '#ffd700' }} // لون النجوم دهبي
        />
      </Box>

      <Box mt={1}>
        <Typography variant="body2" color="textSecondary">
          {review.comment}
        </Typography>
      </Box>

      <Box mt={1}>
        <Typography variant="caption" color="textSecondary">
          {new Date(review.date).toLocaleDateString('en-US')}
        </Typography>
      </Box>
    </Box>
  );
};

export default RateItem;
