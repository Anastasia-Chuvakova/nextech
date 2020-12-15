import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import About from "./components/pages/About";
//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/css/bootstrap-theme.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <h1>Simple SPA</h1>

          <div className="content"></div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/product" component={Product} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
