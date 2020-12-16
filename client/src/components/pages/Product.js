import React, { Component } from "react";
import axios from "axios";
import Modal from "../Modal";
import Currency from "../Currency";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      baseCurrency: "USD",
      cpnvertToCurrency: "CAD",
      baseAmout: "",
      currencies: [],
      showHide: false,
      modalID: "",
      modalData: [{}],
      addToCartItem: {},
      addToCartAmount: "",
      cartItems: [
        {
          item: {},
          amount: "",
        },
      ],
    };
  }

  //const API_URL = 'https://api.exchangeratesapi.io/latest';

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

  //  const {modalData} = this.state;
  //  const  newModalData = response.d
  // addToCart = (productObj, quantity) => {
  //   //   setState((modalData)=>({
  //   //     productObj: modalData.productObj.push([{}])
  //   //  }),
  //   //this.setState({ modalData: [{ productObj: productObj.category }] });

  //   // this.setState((prevState) => ({
  //   //   modalData: [...prevState.ModalData, "new value"],
  //   // }));
  //   // this.setState((prevState) => ({
  //   //   modalData: ["new value", ...prevState.modalData],
  //   // }));
  //   // this.setState((prevState) => ({
  //   //   modalData: [...prevState.modalData, { name: "object" }],
  //   // }));
  //   // this.setState((prevState) => ({
  //   //   modalData: [{ name: "object" }, ...prevState.modalData],
  //   // }));
  //   // this.setState({ addToCartItem: productObj });
  //   // this.setState({ addToCartAmount: amount });
  //   // console.log("product Obj", this.state.addToCartItem);
  //   // console.log("product amount", this.state.addToCartAmount);
  //   let newCartItem = {
  //     item: productObj,
  //     amount: quantity,
  //   };
  //   let newCartItems = this.state.cartItems.concat(newCartItem);
  //   this.setState({ cartItems: newCartItems });
  //   console.log("newcartitem,", newCartItem);
  //   console.log("newcartitems,", newCartItems);
  //   console.log("cart state,", this.state.cartItems);
  // };

  setModalInfo(productIndex, productObj) {
    this.setState({ modalID: productIndex });
    this.setState({ modalData: productObj });
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
                        <li>Product ID: {item.id}</li>
                      </ul>
                    </div>
                  </div>

                  <div onClick={() => this.setModalInfo(index, item)}>
                    <Modal
                      productID={this.state.modalID}
                      productData={this.state.modalData}
                    />
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
        {/* <Cart cartItems={this.state.cartItems} /> */}
      </div>
    );
  }
}

export default Product;
