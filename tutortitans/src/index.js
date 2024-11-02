import { Star } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Rating,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const tutors = [
  {
    name: "Tutor 1",
    image: "https://via.placeholder.com/150",
    rating: 4,
    quote:
      "My goal is to build relationships with each student that come across utilizing my empathy, emotion, and values shared in my work.",
  },
  {
    name: "Tutor 2",
    image: "https://via.placeholder.com/150",
    rating: 4,
    quote:
      "My goal is to build relationships with each student that come across utilizing my empathy, emotion, and values shared in my work.",
  },
  {
    name: "Tutor 3",
    image: "https://via.placeholder.com/150",
    rating: 4,
    quote:
      "My goal is to build relationships with each student that come across utilizing my empathy, emotion, and values shared in my work.",
  },
];

const features = [
  {
    title: "Create",
    description: "Start your educational journey by creating an account today!",
    icon: <Star />, // Placeholder icon
  },
  {
    title: "Schedule",
    description:
      "Choose a time that works for you and book your appointment with our experienced tutors!",
    icon: <Star />, // Placeholder icon
  },
  {
    title: "Attend",
    description:
      "Schedule Choose a time that works for you and book your appointment with our experienced tutors!",
    icon: <Star />, // Placeholder icon
  },
];

const App = () => {
  return (
    <div>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Avatar src="https://via.placeholder.com/40" alt="Logo" />
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
            TUTOR
          </Typography>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box textAlign="center" my={4}>
          <Typography variant="h3" gutterBottom>
            Learning Success
          </Typography>
          <Typography variant="h5" gutterBottom>
            Meet our tutors
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {tutors.map((tutor, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={tutor.image}
                  alt={tutor.name}
                />
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Rating value={tutor.rating} readOnly />
                    <Typography variant="body2" ml={1}>
                      {tutor.rating}/5
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    {tutor.quote}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={4} mt={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card>
                <CardContent>
                  <Box textAlign="center">
                    {feature.icon}
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default App;
