import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import NavBar from "./Navbar";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: theme.palette.primary.light,
    borderColor: theme.palette.primary.light,
  },
  hireText: {
    color: theme.palette.primary.light,
    textAlign: "center",
    textTransform: "uppercase",

  }
}));

const InputField = withStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: theme.palette.primary.light,
    },
    "& label": {
      color: theme.palette.secondary.light,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.secondary.light,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.secondary.light,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.light,
      },
    },
  },
}))(TextField);

const Contacts = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    axios.post("https://portfolio-kunal.firebaseio.com/data.json", {
      name,
      email,
      message,
    });
    alert("Form Submitted");
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <Box component="div" style={{ background: "#233", height: "100vh" }}>
      <NavBar />
      <Grid container justify="center">
        <Box component="form" className={classes.form} onSubmit={formHandler}>
          <Typography
            variant="h5"
            className={classes.hireText}
            // style={{
            //   color: "theme.palette.primary.light",
            //   textAlign: "center",
            //   textTransform: "uppercase",
            // }}
          >
            HIRE or contact me...
          </Typography>
          <InputField
            type="text"
            fullWidth={true}
            label="Name"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{
              style: {
                color: "white",
              },
            }}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <InputField
            type="email"
            fullWidth={true}
            label="Email"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{
              style: {
                color: "white",
              },
            }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <InputField
            type="text"
            fullWidth={true}
            label="Message"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{
              style: {
                color: "white",
              },
            }}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
            type="submit"
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacts;
