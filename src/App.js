import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Form from "./components/Form";
import Dropdown from "./components/Dropdown"
import Gallery from "./components/Gallery";
import Signin from "./components/Signin";
import SignupForm from "./components/SignupForm";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />;
          <Route path="/menu" component={Dropdown} />;
          <Route path="/about" component={About} />;
          <Route path="/gallery" component={Gallery} />;
          <Route path="/signin" component={Signin} />;
          <Route path="/contact" component={Form} />;
        </Switch>
      </div>
    </Router>
  );
}

export default App;
