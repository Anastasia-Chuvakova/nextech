import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Stuff from "./components/pages/Product";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product</NavLink>
            </li>
          </ul>
          <div className="content"></div>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
