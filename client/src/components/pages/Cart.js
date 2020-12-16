import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Pdf from "react-to-pdf";
import { Currency } from "../Currency";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: sessionStorage.getItem("cartItems"),
      //itemClicked: 0,
    };
  }

  clearAll = () => {
    window.sessionStorage.clear(); //clear all localstorage
    this.props.history.push("/");
    //   window.sessionStorage.removeItem("cartItems", "product"); //remove one item
  };

  render() {
    const ref = React.createRef();
    return (
      <>
        <div className="container">
          {JSON.parse(sessionStorage.getItem("cartItems")).length > 0 && (
            <div ref={ref}>
              {JSON.parse(sessionStorage.getItem("cartItems")).map(
                (item, index) => (
                  <div className="cart-items d-flex m-2 pr-sm-0 ">
                    <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12 ">
                      <img
                        className=" img-fluid   rounded img-thumbnail"
                        src={item.product.image}
                      />
                    </div>
                    <div className="align-left m-3">
                      <div className="d-flex justify-content-between">
                        <p>category: {item.product.category}</p>
                        <p>id: {item.product.id}</p>
                      </div>

                      <div className="justify-content-between">
                        {item.product.price.length > 0 && (
                          <p>
                            Price per item in English: ${item.product.price}
                          </p>
                        )}
                        <p>quantity: {item.quantity}</p>
                        {item.addLanguage && (
                          <p>
                            Any additional language: ${item.product.addLanguage}
                          </p>
                        )}
                        {item.product.perDay.length > 0 && (
                          <p>Producer Day Rate: ${item.product.perDay}</p>
                        )}
                        {item.product.addPerHour.length > 0 && (
                          <p>
                            Additional charge per hour: $
                            {item.product.addPerHour}
                          </p>
                        )}
                        {item.add100 && (
                          <p>
                            charges for 100 user/month: ${item.product.add100}
                          </p>
                        )}
                        {item.add100 && (
                          <p>
                            charges for 200 user/month: ${item.product.add200}
                          </p>
                        )}
                        {item.add100 && (
                          <p>
                            charges for 300 user/month: ${item.product.add300}
                          </p>
                        )}
                      </div>

                      {/* <button
                        onClick={this.deleteThis}
                        className=" btn btn-danger btn-number dec-btn"
                      >
                        remove item
                      </button> */}
                    </div>
                  </div>
                )
              )}
              <div className="cart-total text-center">
                Total: $
                {JSON.parse(sessionStorage.getItem("cartItems")).reduce(
                  (a, v) => (a = a + v.itemTotal),
                  0
                )}
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={this.clearAll}
            className="btn btn-danger m-2"
          >
            remove all
          </button>
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button className="btn btn-primary" onClick={toPdf}>
                Generate Pdf
              </button>
            )}
          </Pdf>
        </div>
      </>
    );
  }
}
export default withRouter(Cart);
/////////////

// class Cart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cartItems: sessionStorage.getItem("cartItems"),
//     };
//   }

// render() {
//   const ref = React.createRef();
//   return (
//     <div className="container">
{
  /* <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button className="btn btn-primary" onClick={toPdf}>
              Generate Pdf
            </button>
          )}
        </Pdf> */
}
{
  /* {this.props.cartItems.map((item, index) => (
          <div className="cart-itme">
            <p key={index}>{item.item.price}</p>
            <p>{item.item.category}</p>
            <p>{item.amount}</p>
          </div>.
        ))} */
}
{
  /* {JSON.parse(sessionStorage.getItem("cartItems")).length > 0 && (
          <div>
            {JSON.parse(sessionStorage.getItem("cartItems")).map(
              (item, index) => (
                <div className="cart-items">
                  <p>category: {item.product.category}</p>
                  <img src={item.product.image} />
                  <p>id: {item.product.id}</p>
                  <p>price: {item.product.price}</p>
                  <p>quantity: {item.quantity}</p>
                </div>
              )
            )}
            <div className="cart-total">
              Total:{" "}
              {JSON.parse(sessionStorage.getItem("cartItems")).reduce(
                (a, v) => (a = a + v.itemTotal),
                0
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Cart; */
}
