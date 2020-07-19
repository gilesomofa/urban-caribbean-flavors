import React from "react";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
// import MaterialNav from "./components/materialNav";
import Contact from "./components/Contact";
import About from "./components/About";
import Blog from "./components/Blog";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* <MaterialNav /> */}
        <Switch>
          <Route path="/" exact component={Home} />;
          <Route path="/about" component={About} />;
          <Route path="/contact" component={Contact} />;
          <Route path="/blog" component={Blog} />;
        </Switch>
      </div>
    </Router>
  );
}

export default App;
