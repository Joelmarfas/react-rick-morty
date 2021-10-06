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
    });
  }

  render() {
    const { image, name, species } = this.state;
    return (
      <div>
        <img src={image} alt="" />
        <h2>{name}</h2>
        <h3>Character: {species}</h3>
      </div>
    );
  }
}
