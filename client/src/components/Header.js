import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import cart from "../assets/images/cart.png";
import { Button } from "bootstrap";

class Header extends Component {
  render() {
    return (
      <div className="containter-fluid bg-light ">
        <div className="d-flex justify-content-between header-container">
          <NavLink className="navbar-logo w-25 p-3" to="/">
            <img className="img rounded" src={logo} alt="logo" />
          </NavLink>

          <nav className="navbar navbar-expand-lg navbar-light">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">
                    Home<span className="sr-only">(current)</span>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link text-dark" to="/product">
                    Product
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-dark" to="/cart">
                    Cart
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
/* <ul className="header">
<li>
  <NavLink to="/">Home</NavLink>
</li>
<li>
  <NavLink to="/about">About us</NavLink>
</li>
<li>
  <NavLink to="/product">Product</NavLink>
</li>
</ul> */ //
