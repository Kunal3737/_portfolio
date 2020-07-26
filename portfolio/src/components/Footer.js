import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import GitHub from "@material-ui/icons/GitHub";
// import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});
const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Facebook />}
        onClick={() => {
          window.open("https://www.facebook.com/kunal.shinde.9843/");
        }}
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<GitHub />}
        onClick={() => {
          window.open("https://github.com/Kunal3737");
        }}
      />
      {/* <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Instagram />}
      /> */}
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<LinkedIn />}
        onClick={() => {
          window.open("https://www.linkedin.com/in/kunal-shinde-55135b125/");
        }}
      />
    </BottomNavigation>
  );
};

export default Footer;
