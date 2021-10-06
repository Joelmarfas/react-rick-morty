/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import axios from "axios";

export default class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      name: "",
      species: null,
      status: null,
      origin: undefined,
      location: null,
    };
  }

  async componentDidMount() {
    await this.infoCharacter();
  }

  async infoCharacter() {
    console.log(this);
    const urlCharacter = "https://rickandmortyapi.com/api/character/1";
    const axiosCharacter = await axios.get(urlCharacter);
    console.log(axiosCharacter.data);
    const result = axiosCharacter.data;
    this.setState({
      image: result.image,
      name: result.name,
      species: result.species,
      status: result.status,
      origin: result.origin.name,
      location: result.location.name,
    });
  }

  render() {
    const { image, name, species, status, origin, location } = this.state;
    return (
      <div>
        <img src={image} alt="" />
        <h2>{name}</h2>
        <h6>
          <strong>CHARACTER</strong>
        </h6>
        <p>
          {species} | {status}
        </p>
        <h6>
          <strong>ORIGIN</strong>
        </h6>
        <p>{origin}</p>
        <h6>
          <strong>LOCATION</strong>
        </h6>
        <p>{location}</p>
      </div>
    );
  }
}
