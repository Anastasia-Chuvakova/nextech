import React, { Component } from "react";
import axios from "axios";
//import collapse from "bootstrap";

class Product extends Component {
  state = {
    productData: [],
    baseCurrency: "USD",
    cpnvertToCurrency: "CAD",
    baseAmout: "",
    currencies: [],
  };

  componentDidMount() {
    axios
      .get("/product")
      // .then((repsonse) => repsonse.json())
      .then((response) => {
        const productData = response.data;
        this.setState({ productData });
        console.log("Product response:", response);
      });
    // console.log("info:", this);
  }

  render() {
    const item = this.state.productData;

    return (
      <div className="container ">
        <div>
          <p className="small text-muted small text-uppercase mb-1">
            Made the hard way
          </p>
          <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
        </div>
        <div className="row">
          {item.map((item, index) => (
            //Product
            <div className="py-2 col-xl-3 col-lg-4 col-sm-6 col-xs-12">
              <div className="card">
                <div className="product text-center">
                  <div className="position-relative mb-3">
                    <div className="badge text-white badge-"></div>
                    <a className="d-block" href="#">
                      <img
                        className="img-fluid  rounded "
                        src={item.image}
                        alt="picture"
                      />
                    </a>
                    <div className="product-overlay">
                      <ul className="mb-0 list-inline">
                        <li key={index}>
                          <p>Category: {item.category}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h6>
                    <a className="reset-anchor" href="#">
                      Name of the item
                    </a>
                  </h6>
                  <button className="btn btn-primary">Show Description</button>

                  <div>
                    <p className="small text-muted">
                      description:{item.description}
                    </p>
                  </div>

                  {item.price.length > 0 && (
                    <p className="small text-muted">price: ${item.price}</p>
                  )}
                  {item.addLanguage.length > 0 && (
                    <p className="small text-muted">
                      add language: ${item.addLanguage}
                    </p>
                  )}

                  {item.perDay.length > 0 && (
                    <p className="small text-muted">per day: ${item.perDay}</p>
                  )}
                  {item.addPerHour.length > 0 && (
                    <p className="small text-muted">
                      per hour: ${item.addPerHour}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Product;
