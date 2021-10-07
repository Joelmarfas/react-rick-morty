/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import axios from "axios";
import React, { Component } from "react";

import Layout from "../../components/Layout";
import CharacterCard from "../../components/CharacterCard";

class Episode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      // hasLoaded: false,
      // hasError: false,
    };
    // episode: null,
    // errorMessage: null,
  }

  async componentDidMount() {
    await this.loadCharacters();
  }

  async loadCharacters() {
    console.log(this.props);
    const episodeId = this.props.match.params.episodeId;
    const url = `https://rickandmortyapi.com/api/episode/${episodeId}`;

    try {
      const axio = await axios.get(url);
      // console.log(axio);
      const res = axio.data.characters;
      // console.log(res);
      const arr = await axios.all(res.map((i) => axios.get(i)));
      // console.log(arr);
      const arr2 = arr.map((e) => e.data);
      // console.log(arr2);
      this.setState({
        characters: arr2,
      });
    } catch (error) {
      this.setState({
        // hasError: true,
        // errorMessage: "Esto tampoco funciona",
      });
    }
  }

  render() {
    const { characters } = this.state;
    return (
      <Layout>
        <section className="row">
          <div className="row">
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                id={character.id}
                name={character.name}
                image={character.image}
                species={character.species}
                status={character.status}
                origin={character.origin}
                location={character.location}
              />
            ))}
          </div>
        </section>
      </Layout>
    );
  }
}

export default Episode;
