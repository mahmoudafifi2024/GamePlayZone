import { Container } from "@mui/material";
import RateItem from "./RateItem"
import RatePost from "./RatePost"

const sampleReview = {
  id: "1",
  user: {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  rating: 4.5,
  comment: "This is a sample review comment.",
  date: "2025-05-28T12:00:00Z",
};

export default function RateContainer() {
  return (
    <Container>
      <RateItem review={sampleReview} />
      <RatePost />
    </Container>
  );
}
