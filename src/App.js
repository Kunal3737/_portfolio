import React from "react";
import Home from "./components/index";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route exact path="/_portfolio" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contacts" component={Contacts} />
    </>
  );
}

export default App;
