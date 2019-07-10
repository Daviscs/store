import React from "react";
import { Link } from "react-router-dom";
import PaypalButton from "./PaypalButton";

export default function CartTotals({ value, history }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/products">
              <button
                className="btn btn-outline-danger text-upercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">total :</span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <Link to="/checkout">
              <button className="btn btn-primary px-4 text-uppercase mb-2 mt-2">
                Checkout Now
              </button>
            </Link>
            <PaypalButton
              total={cartTotal}
              clearCart={clearCart}
              histroy={history}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
