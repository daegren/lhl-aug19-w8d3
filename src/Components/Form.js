import React, { Component, useState } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: ""
    };

    // Either do this, or use arrow functions which will auto bind to the right context
    // this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this._handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter a name!"
            value={this.state.name}
            onChange={e => {
              this.setState({ name: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter an email!"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>

        <button type="submit">Save</button>
      </form>
    );
  }

  _handleFormSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email
    };

    this.props.onSave(newUser);
    this.setState({ name: "", email: "" });
  };
}

const FunctionalForm = ({ onSave }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const _handleFormSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: name,
      email: email
    };

    onSave(newUser);
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={_handleFormSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter a name!"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter an email!"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <button type="submit">Save</button>
    </form>
  );
};
