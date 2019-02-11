import React, { Component } from "react";


class Form extends Component {

  handleNameChange = (e) => {
    this.props.onNameChange(e.target.value);
  }
  handleEmailChange = (e) => {
    this.props.onEmailChange(e.target.value);
  }
  handleAddressChange = (e) => {
    this.props.onAddressChange(e.target.value);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit()
  }

  render() {
    const name = this.props.name;
    const email = this.props.email;
    const address = this.props.address;
    return (
        <div className="Card">
          <h3>Please enter your contact information</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              name="name"
              id="name"
              value={name}
              onChange={this.handleNameChange}
              placeholder="Name"
            />
            <br />
            <input
              name="email"
              id="email"
              value={email}
              onChange={this.handleEmailChange}
              placeholder="Email"
            />
            <br />
            <input
              name="address"
              id="address"
              value={address}
              onChange={this.handleAddressChange}
              placeholder="Address"
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
    );
  }
}

export default Form;
