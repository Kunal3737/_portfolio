import React from "react";
import NavBar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import project1 from "../assests/pro-organizer-app-img.jpg";
import project2 from "../assests/financial-portfolio-tracker-img.png";
import project3 from "../assests/weather-img.png";
import project4 from "../assests/banner.jpg";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
    height: 380,
  },
});
const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <NavBar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="200"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project Organizer App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Pro-organiser-application is collaboration tool that organizes
                  your projects into boards, which in terms helps in managing
                  the work.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a
                  href="https://github.com/Kunal3737/pro-organiser-application"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  GitHub
                </a>
              </Button>
              <Button size="small" color="primary">
                <a
                  href="https://kunal3737.github.io/pro-organiser-application/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="200"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Financial Portfolio Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An application built using ReactJS, where you can follow up on
                  your purchased stock/ticker for profit/loss based on your
                  buying price.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a
                  href="https://github.com/Kunal3737/financial-portfolio-tracker-app"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  GitHub
                </a>
              </Button>
              <Button size="small" color="primary">
                <a
                  href="https://kunal3737.github.io/financial-portfolio-tracker-app/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="200"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Weather Application
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  It is a website showing weather of some popular cities of
                  India made using HTML, CSS and ReactJS. Used
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a
                  href="https://github.com/Kunal3737/weather-application"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  GitHub
                </a>
              </Button>
              <Button size="small" color="primary">
                <a
                  href="https://kunal3737.github.io/weather-application/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="200"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  UI Kit Study Jam
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Used UI Kit for building this project which is showing the
                  details about an upcoming study jam session
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a
                  href="https://github.com/Kunal3737/UI-Kit-Study-Jam"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  GitHub
                </a>
              </Button>
              <Button size="small" color="primary">
                <a
                  href="https://kunal3737.github.io/UI-Kit-Study-Jam/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
