import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Form from "./components/Form";
import Dropdown from "./components/Dropdown"
import Signup from "./components/Signup";
import SignupForm from "./components/SignupForm";
import Blog from "./components/Blog";
import Signin from "./components/Signin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
         <Nav /> 
        <Switch>
          <Route path="/" exact component={Home} />;
          <Route path="/menu" component={Dropdown} />;
          <Route path="/about" component={About} />;
          <Route path="/signup" component={Signup} />;
          <Route path="/contact" component={Form} />;
		  <Route path="/blog" component={Blog} />;
        </Switch>
      </div>
    </Router>
  );
}

export default App;
