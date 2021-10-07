/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import axios from "axios";

export default class Location extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // name: "",
    };
  }

  async componentDidMount() {
    await this.infoLocation();
  }

  async infoLocation() {
    console.log(this);

    const urlLocations = "https://rickandmortyapi.com/api/location/20";
    const axiosLocation = await axios.get(urlLocations);
    console.log(axiosLocation);
  }

  render() {
    return <div>Location</div>;
  }
}
