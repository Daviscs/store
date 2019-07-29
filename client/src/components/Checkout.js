import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      street: "",
      city: "",
      state: "",
      zip: ""
    };
  }

  handleChange = e => {
    console.log("type");
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    console.log("submit");
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      message,
      street,
      city,
      state,
      zip
    } = this.state;

    const form = axios.post("/api/checkout", {
      firstName,
      lastName,
      email,
      message,
      street,
      city,
      state,
      zip
    });

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      street: "",
      city: "",
      state: "",
      zip: ""
    });
  };

  render() {
    return (
      <CheckoutWrapper>
        <div className="checkout-body">
          <div className="wrapper">
            <div className="container">
              <form onSubmit={this.handleSubmit}>
                <h6 className="text-justify-center text-danger">
                  Leave payment information blank or enter wrong information
                </h6>
                <h1>
                  <i className="fas fa-shipping-fast" />
                  Shipping Details
                </h1>
                <div className="name">
                  <div>
                    <label>First</label>
                    <input
                      onChange={this.handleChange}
                      type="text"
                      name="firstName"
                      value={this.state.firstName}
                    />
                  </div>
                  <div>
                    <label>Last</label>
                    <input
                      onChange={this.handleChange}
                      type="text"
                      name="lastName"
                      value={this.state.lastName}
                    />
                  </div>
                </div>
                <div className="email">
                  <label>Email</label>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    name="email"
                    value={this.state.email}
                  />
                </div>
                <div className="street">
                  <label>Street</label>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    name="street"
                    value={this.state.street}
                  />
                </div>
                <div className="address-info">
                  <div>
                    <label>City</label>
                    <input
                      onChange={this.handleChange}
                      type="text"
                      name="city"
                      value={this.state.city}
                    />
                  </div>
                  <div>
                    <label>State</label>
                    <input
                      onChange={this.handleChange}
                      type="text"
                      name="state"
                      value={this.state.state}
                    />
                  </div>
                  <div>
                    <label>Zip</label>
                    <input
                      onChange={this.handleChange}
                      type="text"
                      name="zip"
                      value={this.state.zip}
                    />
                  </div>
                </div>
                <h1>
                  <i className="far fa-credit-card" /> Payment Information
                </h1>
                <div className="cc-num">
                  <label>Credit Card No.</label>
                  <input type="text" name="card-num" />
                </div>
                <div className="cc-info">
                  <div>
                    <label>Exp</label>
                    <input type="text" name="expire" />
                  </div>
                  <div>
                    <label>CCV</label>
                    <input type="text" name="security" />
                  </div>
                </div>
                <h1>
                  <i className=" fa fa-envelope" />
                  Message
                </h1>
                <textarea
                  onChange={this.handleChange}
                  type="text"
                  row="5"
                  name="message"
                  value={this.state.message}
                />
                <div className="btns">
                  <button className="btnClass">Purchase</button>
                  <button className="btnClass">To cart</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </CheckoutWrapper>
    );
  }
}

const CheckoutWrapper = styled.div`
  .checkout-body {
    display: flex;
    justify-content: center;
  }

  .wrapper {
    margin-top: 4%;
    width: 60%;
    display: flex;
    justify-content: center;
    font-family: "Arimo";
    background-color: #c9e6ff;
    animation: slideUp 2000ms ease;
  }

  @keyframes slideUp {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      visibility: visible;
    }

    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  .container {
    width: 65%;
    padding: 5% 10%;
  }

  h1 {
    align-self: center;
  }

  form {
    width: 100%;

    > * {
      margin-top: 20px;
    }

    input,
    textarea {
      width: 100%;
      min-height: 25px;
      border: 0;
      font-size: 1rem;
      letter-spacing: 0.15rem;
      font-family: "Arimo";
      margin-top: 5px;
      color: #000;
      border-radius: 4px;
    }

    label {
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 2px;
    }

    h1 {
      font-size: 24px;
      line-height: 10px;
      letter-spacing: 0.5px;
    }

    h1:nth-of-type(2) {
      margin-top: 10%;
    }
  }

  .name {
    justify-content: space-between;
    display: flex;
    width: 100%;

    div {
      width: 45%;
    }
  }

  .address-info {
    display: flex;
    justify-content: space-between;

    div {
      width: 30%;
    }
  }

  .cc-info {
    display: flex;
    justify-content: space-between;

    div {
      width: 45%;
    }
  }

  .btns {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .btnClass {
    margin: 3px 0;
    height: 30px;
    width: 40%;
    color: #000;
    background: #92bde7;
    text-transform: uppercase;
    border-radius: 0.3rem;
    letter-spacing: 2px;

    &:hover {
      animation-name: btn-hov;
      animation-duration: 550ms;
      animation-fill-mode: forwards;
      transform: scale(1.05);
      color: #fff;
    }
  }

  @media (max-width: 736px) {
    .wrapper {
      width: 100%;
    }

    .container {
      width: 100%;
    }

    .btns {
      align-items: center;

      button {
        width: 50%;
      }
    }

    form h1 {
      text-align: center;
    }

    .name,
    .address-info,
    .cc-info {
      flex-direction: column;
      width: 100%;
      justify-content: space-between;

      div {
        align-items: center;
        flex-direction: column;
        width: 100%;
        display: flex;
      }
    }

    .street,
    .cc-num {
      text-align: center;
    }

    input {
      margin: 5px 0;
      min-height: 30px;
    }
  }
`;
