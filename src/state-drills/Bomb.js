import React, { Component } from "react";

export default class Bomb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      counter: "tick",
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  handleDisplay() {
    const {count} = this.state;
    if (count > 8){
      clearInterval(this.interval)
      return "BOOM!!!"
    } else if (count % 2 === 0){
      return "tick"
    } else {
      return "tock"
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>BOOM</h1>
        <hr />
        <p>{this.state.count}</p>
        {this.handleDisplay()}
      </div>
    );
  }
}
