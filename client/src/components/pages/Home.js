import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import overview1 from "../../assets/images/overview1.png";
import overview2 from "../../assets/images/overview2.png";
import overview3 from "../../assets/images/overview3.png";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <section className="theme-bg-dark py-5 mt-2 text-center">
          <h3 className="font-weight-bold">section</h3>
          <p className="mt-3 lead">cards</p>
        </section>

        <div className="row ">
          <div className="col-xs-12 col-sm-6 mb-4">
            <div className="card w-5">
              <div className="card-body">
                <NavLink className="nav-link text-dark" to="/product">
                  <img
                    src={overview1}
                    className="card-img-top w-5px img-thumbnail"
                    alt="image"
                  />
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6  mb-4">
            <div className="card">
              <div className="card-body">
                <NavLink className="nav-link text-dark" to="/product">
                  <img
                    src={overview2}
                    className="card-img-top img-thumbnail"
                    alt="image"
                  />
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6  mb-4">
            <div className="card">
              <div className="card-body">
                <NavLink className="nav-link text-dark" to="/product">
                  <img
                    src={overview3}
                    className="card-img-top img-thumbnail"
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
