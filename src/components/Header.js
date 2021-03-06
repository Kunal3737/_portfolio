import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";

import avatar from "../assests/pp.jpg";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    // color: "theme.palette.primary.light",
    color: theme.palette.primary.light,
  },
  subTitle: {
    color: theme.palette.secondary.light,
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    textAlign: "center",
    zIndex: 1,
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar src={avatar} alt="Kunal Shinde" className={classes.avatar} />
      </Grid>
      <Typography variant="h4" className={classes.title}>
        <Typed strings={["Kunal Shinde"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography variant="h5" className={classes.subTitle}>
        <Typed
          strings={[
            "Front End Engineer",
            "Front End Developer",
            "Web Developer",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
