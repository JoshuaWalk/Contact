import React, { Component } from "react";
import Contact from "./Contact";
import Form from "./Form";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      submittedName: "",
      submittedEmail: "",
      submittedAddress: ""
    };
  }
  handleNameChange = name => {
    this.setState({ name });
  };
  handleEmailChange = email => {
    this.setState({ email });
  };
  handleAddressChange = address => {
    this.setState({ address });
  };
  handleSubmit = e => {
    this.setState({
      submittedName: this.state.name,
      submittedEmail: this.state.email,
      submittedAddress: this.state.address
    });
  };

  render() {
    const name = this.state.submittedName;
    const email = this.state.submittedEmail;
    const address = this.state.submittedAddress;
    return (
      <div>
        <Form
          onNameChange={this.handleNameChange}
          onEmailChange={this.handleEmailChange}
          onAddressChange={this.handleAddressChange}
          onFormSubmit={this.handleSubmit}
        />
        <Contact name={name} email={email} address={address} />
      </div>
    );
  }
}
export default Container;
