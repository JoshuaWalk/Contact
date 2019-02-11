import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
        <div className="Card2">
          <h3> Contact: </h3>
          <p>Name: {this.props.name}</p>
          <p>Email: {this.props.email}</p>
          <p>Address: {this.props.address}</p>
        </div>
    );
  }
}
export default Contact;
