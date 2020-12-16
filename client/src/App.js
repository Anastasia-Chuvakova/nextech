import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Cart from "./components/pages/Cart";

//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/css/bootstrap-theme.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />

          <div className="content"></div>
          <Route exact path="/" component={Home} />

          <Route path="/product" component={Product} />
          <Route path="/cart" component={Cart} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
