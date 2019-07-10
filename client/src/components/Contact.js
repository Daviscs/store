import React, { Component } from "react";
import axios from "axios";

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    const { name, email, message } = this.state;

    const form = await axios.post("/api/form", {
      name,
      email,
      message
    });

    e.preventDefault();
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact me
        </h2>

        <p className="text-center w-responsive mx-auto mb-5">
          Have any questions or concerns? Please contact me and I will come back
          to you within a matter of hours to help you.
        </p>
        <div className="contact-container">
          <div className="wrapper">
            <div className="company-info">
              <h3>Davey's Shop</h3>
              <ul>
                <li>
                  <i className="fa fa-map-pin" /> Virginia Beach, VA
                </li>
              </ul>
            </div>
            <div className="contact">
              <form onSubmit={this.handleSubmit}>
                <p>
                  <label>Name</label>
                  <input
                    type="text"
                    value={this.state.name}
                    name="name"
                    onChange={this.handleChange}
                  />
                </p>
                <p>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </p>
                <p className="full">
                  <label>Message</label>
                  <textarea
                    type="text"
                    row="5"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                </p>
                <p className="full">
                  <button>Submit</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
