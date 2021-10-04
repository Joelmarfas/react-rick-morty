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
    try {
      await axios
        .get("https://rickandmortyapi.com/api/character?page=1")
        .then((result) => {
          console.log(result.data.results);
          this.setState({
            characters: result.data.results,
          });
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
          <div className="col col-12">
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
