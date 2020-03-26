import React, { Component } from "react";

export default class RouletteGun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false,
    };
  }
  handleClick = () => {
    this.setState({ spinningTheChamber: true });
    this.timeout = setTimeout(() => {
      const bullet = Math.ceil(Math.random() * 8);
      this.setState({ chamber: bullet, spinningTheChamber: false });
    }, 2000);
  };

  handleDisplay(){
    const {spinningTheChamber, chamber} = this.state;
    const {bulletInChamber} = this.props;
    return spinningTheChamber ? (
      <p>spinning the chamber and pulling the trigger!...</p>
    ) : chamber === bulletInChamber ? (
      <p>
        <b>BANG!!!</b>
      </p>
    ) : (
      <p>you're safe!!!</p>
    )
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div>
        {this.handleDisplay()}
        <button type="button" onClick={this.handleClick}>
          Pull the trigger!
        </button>
      </div>
    );
  }
}
