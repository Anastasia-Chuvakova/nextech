import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import overview1 from "../../assets/images/overview1.png";
import overview2 from "../../assets/images/overview2.png";
import overview3 from "../../assets/images/overview3.png";
import products from "../../assets/images/products.png";

class Home extends Component {
  render() {
    return (
      <div className="container ">
        <section className="theme-bg-dark py-5 mt-2 text-center">
          <h3 className="h5 text-uppercase mb-4">Categories</h3>
        </section>

        <div className="row">
          <div className="col-xs-12 col-sm-6 mb-4 ">
            <div className="w-5 card bg-light">
              <div className="card-body ">
                <NavLink className="nav-link text-dark img-box" to="/product">
                  <img
                    src={overview1}
                    className="card-img-top bg-light img-thumbnail "
                    alt="image"
                  />
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6  mb-4">
            <div className="card bg-light">
              <div className="card-body">
                <NavLink className="nav-link text-dark" to="/product">
                  <img
                    src={overview2}
                    className="card-img-top bg-light img-thumbnail"
                    alt="image"
                  />
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6  mb-4">
            <div className="card bg-light">
              <div className="card-body">
                <NavLink className="nav-link text-dark" to="/product">
                  <img
                    src={overview3}
                    className="card-img-top bg-light img-thumbnail"
                    alt="image"
                  />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6  mb-4">
            <div className="card bg-light">
              <div className="card-body">
                <NavLink className="nav-link text-dark" to="/product">
                  <img
                    src={products}
                    className="card-img-top  bg-light rounded"
                    alt="image"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
