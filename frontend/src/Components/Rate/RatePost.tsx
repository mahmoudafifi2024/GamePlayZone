import React from 'react';
import { Box, Grid, Typography, TextareaAutosize, Button, Rating, Avatar } from '@mui/material';

interface RatePostState {
  rating: number;
  comment: string;
}

const RatePost: React.FC = () => {
  const [rateData, setRateData] = React.useState<RatePostState>({
    rating: 0,
    comment: ''
  });

  const handleRatingChange = (event: React.SyntheticEvent<Element, Event>, newValue: number | null) => {
    setRateData({ ...rateData, rating: newValue || 0 });
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRateData({ ...rateData, comment: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Rate Data:', rateData);
    // هنا ممكن تضيف منطق ارسال البيانات للسيرفر أو غيره
  };

  return (
    <Box sx={{ mt: 3, maxWidth: 600, bgcolor: '#fff', p: 2, borderRadius: 2, boxShadow: 1 }}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Avatar alt="Ali Mohamed" src="https://i.pravatar.cc/150?img=5" />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="div" fontWeight="medium">
            Alaa Mohamed
          </Typography>
        </Grid>
        <Grid item xs={12} sm="auto">
          <Rating
            name="user-rating"
            value={rateData.rating}
            onChange={handleRatingChange}
            size="medium"
            precision={0.5}
            sx={{ color: '#ffd700' }}
          />
        </Grid>
      </Grid>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextareaAutosize
          minRows={4}
          placeholder="Write your comment..."
          style={{
            width: '100%',
            padding: '8px',
            fontSize: 14,
            borderRadius: 4,
            borderColor: '#ccc',
            resize: 'vertical',
            fontFamily: 'inherit',
          }}
          value={rateData.comment}
          onChange={handleCommentChange}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button variant="contained" color="primary" type="submit">
            Add Comment
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RatePost;
