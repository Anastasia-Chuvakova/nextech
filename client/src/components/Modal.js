import React from "react";
import { Button, Modal, NavLink } from "react-bootstrap";
import Pdf from "react-to-pdf";

class BootstrapModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: false,
      click: 1,
      addLanguage: false,
      add100: false,
      add200: false,
      add300: false,
      // showNum: true,
      cartID: "",
      cartData: {},
    };
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  incrementItem = () => {
    this.setState({ click: this.state.click + 1 });
  };
  decrementItem = () => {
    if (this.state.click > 0) {
      this.setState({ click: this.state.click - 1 });
    }
  };

  addLanguage = () => {
    this.setState({ addLanguage: !this.state.addLanguage });
  };

  addUser = () => {
    this.setState({ add100: !this.state.add100 });
    this.setState({ add100: !this.state.add200 });
    this.setState({ add100: !this.state.add300 });
  };
  setCartInfo(productObj, amount) {
    // this.setState({ cartID: productIndex });
    // this.setState({ cartData: productObj });
    let newCartItem = {};
    if (this.state.addLanguage) {
      console.log("addlang");
      newCartItem = {
        product: productObj,
        addLanguage: this.state.addLanguage,
        add100: this.state.add100,
        add200: this.state.add200,
        add300: this.state.add300,
        quantity: amount, //keys in sessions storrage
        itemTotal:
          amount * (Number(productObj.price) + Number(productObj.addLanguage)),

        //price:
      };
    } else {
      console.log("no addlang");
      newCartItem = {
        product: productObj,
        addLanguage: this.state.addLanguage,
        quantity: amount, //keys in sessions storrage
        itemTotal: amount * productObj.price,

        //price:
      };
      // if(this.state.add100 || this.state.add200 || this.state.add300){
      //   console.log("addUser");
      //   newCartItem = {
      //     product: productObj,
      //     addLanguage: this.state.addLanguage,
      //     add100: this.state.add100,
      //     add200: this.state.add200,
      //     add300: this.state.add300,
      //     quantity: amount, //keys in sessions storrage
      //     itemTotal:
      //       amount * ((productObj.add100) +
      //             Number(productObj.add200) +
      //             Number(productObj.add300)),
      // };
      // }else {
      //   console.log("no addlang");
      //   newCartItem = {
      //     product: productObj,
      //     addLanguage: this.state.addLanguage,
      //     add100: this.state.add100,
      //     add200: this.state.add200,
      //     add300: this.state.add300,
      //     quantity: amount, //keys in sessions storrage
      //     itemTotal: amount * productObj.price

      //     //price:
      //   }
    }

    //read session storage cart items

    if (sessionStorage.getItem("cartItems") === null) {
      console.log(newCartItem);

      let cartItems = [];

      cartItems.push(newCartItem);

      sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
      console.log(JSON.parse(sessionStorage.getItem("cartItems")));
    } else {
      let cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
      let itemExists = false;

      for (let i = 0; i < cartItems.length; i++) {
        if (newCartItem.product.id === cartItems[i].product.id) {
          cartItems[i].quantity += newCartItem.quantity;
          itemExists = true;
          break;
        }
      }
      if (itemExists) {
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
      } else {
        cartItems.push(newCartItem);
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
      }

      console.log(JSON.parse(sessionStorage.getItem("cartItems")));
    }
  } //do not delete this tag!
  render() {
    return (
      <>
        <div className="container">
          <>
            {" "}
            <Button
              variant="primary"
              onClick={() => this.handleModalShowHide()}
            >
              More Info
            </Button>
            <form
              className="container container-model col-sm-5 pl-sm-0"
              productID={this.state.cartID}
              productData={this.state.cartData}
            >
              <Modal show={this.state.showHide}>
                <Modal.Header
                  closeButton
                  onClick={() => this.handleModalShowHide()}
                >
                  <Modal.Title>
                    <h2>Category: {this.props.productData.category}</h2>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="d-flex">
                    <img
                      className="img-fluid  rounded "
                      src={this.props.productData.image}
                      alt="picture"
                    />
                  </div>
                  <div>
                    <p>Product ID: {this.props.productData.id}</p>
                    <p>{this.props.productData.description}</p>
                  </div>
                  <div>
                    {this.props.productData.price > 0 && (
                      <p className="small text-muted">
                        price: ${this.props.productData.price}
                      </p>
                    )}
                    {this.props.productData.addLanguage > 0 && (
                      <form className="input-group ">
                        <div className="d-flex input-group-prepend">
                          <p className=" small text-muted p-2">
                            add language: ${this.props.productData.addLanguage}
                          </p>
                          <input
                            className="form-control-sm"
                            type="checkbox"
                            onChange={() => {
                              this.addLanguage();
                            }}
                            checked={this.state.addLanguage}
                          />
                        </div>
                      </form>
                    )}

                    {this.props.productData.perDay > 0 && (
                      <p className="small text-muted">
                        per day: ${this.props.productData.perDay}
                      </p>
                    )}
                    {this.props.productData.addPerHour > 0 && (
                      <p className="small text-muted">
                        per hour: ${this.props.productData.addPerHour}
                      </p>
                    )}

                    {this.props.productData.add100 > 0 && (
                      <form className="input-group ">
                        <div className="d-flex input-group-prepend">
                          <p className=" small text-muted p-2">
                            add 100 user/month: ${this.props.productData.add100}
                          </p>
                          <input
                            className="form-control-sm"
                            type="checkbox"
                            onChange={() => {
                              this.addUser();
                            }}
                            checked={this.state.add100}
                          />
                        </div>
                      </form>
                    )}
                    {this.props.productData.add200 > 0 && (
                      <form className="input-group ">
                        <div className="d-flex input-group-prepend">
                          <p className=" small text-muted p-2">
                            add 200 user/month: ${this.props.productData.add200}
                          </p>
                          <input
                            className="form-control-sm"
                            type="checkbox"
                            onChange={() => {
                              this.addUser();
                            }}
                            checked={this.state.add200}
                          />
                        </div>
                      </form>
                    )}
                    {this.props.productData.add300 > 0 && (
                      <form className="input-group ">
                        <div className="d-flex input-group-prepend">
                          <p className=" small text-muted p-2">
                            add 300 user/month: ${this.props.productData.add300}
                          </p>
                          <input
                            className="form-control-sm"
                            type="checkbox"
                            onChange={() => {
                              this.addUser();
                            }}
                            checked={this.state.add300}
                          />
                        </div>
                      </form>
                    )}
                  </div>
                </Modal.Body>
                <div className="d-flex  ">
                  <div className="col-sm-7 pr-sm-0 ">
                    <div className="border d-flex align-items-center justify-content-between py-1 px-3">
                      <span className="small text-uppercase text-gray mr-4 no-select">
                        Quantity
                      </span>
                      <div className="quantity d-flex align-items-center ">
                        <button
                          className="quantity-left-minus btn btn-danger btn-number"
                          onClick={this.decrementItem}
                        >
                          -
                        </button>
                        <input
                          className="form-control border-0 shadow-0 p-0 text-center "
                          type="text"
                          value={this.state.click}
                        />
                        <button
                          className="quantity-right-plus btn btn-success btn-number"
                          onClick={this.incrementItem}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    className="btn btn-dark btn-lg w-auto h-100 d-flex align-items-center justify-content-center px-2"
                    href="#"
                    onClick={() =>
                      this.setCartInfo(this.props.productData, this.state.click)
                    }
                  >
                    Add to cart
                  </button>
                </div>

                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => this.handleModalShowHide()}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </form>
          </>
        </div>
      </>
    );
  }
}

export default BootstrapModal;
