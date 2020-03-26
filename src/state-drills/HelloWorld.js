import React, { Component } from "react";

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      who: "world",
    };
  }

  handleClick = e => {
    const greeting = e.target.value;
    this.setState({ who: greeting });
  };

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}!</p>
        <button type="button" onClick={this.handleClick} value="friend">
          Friend
        </button>
        <button type="button" onClick={this.handleClick} value="React">
          React
        </button>
        <button type="button" onClick={this.handleClick} value="world">
          World
        </button>
      </div>
    );
  }
}
