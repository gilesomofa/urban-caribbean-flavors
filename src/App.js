import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Form from "./components/Form";
import Blog from "./components/Blog";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
        <Switch>
          <Route path="/" exact component={Home} />;
          <Route path="/about" component={About} />;
          <Route path="/contact" component={Form} />;
          <Route path="/blog" component={Blog} />;
        </Switch>
      </div>
    </Router>
  );
}

export default App;
