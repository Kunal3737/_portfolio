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
    color: "tomato",
    borderColor: "tomato",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

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
            style={{
              color: "tomato",
              textAlign: "center",
              textTransform: "uppercase",
            }}
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
