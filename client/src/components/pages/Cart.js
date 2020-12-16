import React, { Component } from "react";
import Pdf from "react-to-pdf";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: sessionStorage.getItem("cartItems"),
    };
  }

  render() {
    const ref = React.createRef();
    return (
      <div className="container">
        {/* <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button className="btn btn-primary" onClick={toPdf}>
              Generate Pdf
            </button>
          )}
        </Pdf> */}
        {/* {this.props.cartItems.map((item, index) => (
          <div className="cart-itme">
            <p key={index}>{item.item.price}</p>
            <p>{item.item.category}</p>
            <p>{item.amount}</p>
          </div>.
        ))} */}
        {JSON.parse(sessionStorage.getItem("cartItems")).length > 0 && (
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
export default Cart;
