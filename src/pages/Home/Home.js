/* eslint-disable no-console */
import React, { Component } from "react";
import axios from "axios";
import Layout from "../../components/Layout";
// import { isThisTypeNode } from "typescript";
import EpisodeCard from "../../components/EpisodeCard";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      episodes: [],
      hasLoaded: false,
      hasError: false,
      errorMessage: null,
      page: 1,
    };
    // paginationInfo: null,
  }

  componentDidMount() {
    this.loadEpisodes();
  }

  async loadEpisodes() {
    const { page } = this.state;
    try {
      await axios
        .get(`https://rickandmortyapi.com/api/episode?page=${page}`)
        .then((result) => {
          console.log(result.data.results);
          this.setState({
            episodes: result.data.results,
            hasLoaded: true,
          });
        });
    } catch (error) {
      this.setState({
        hasError: true,
        errorMessage: "Esta mierda no funciona",
      });
      // console.log(error);
      // console.log(errorMessage);
    }
  }

  render() {
    const { episodes, hasLoaded, hasError, errorMessage } = this.state;

    return (
      <Layout>
        <section className="row">
          {hasLoaded && !hasError && (
            <div className="col col-12">
              <h1>Episodes loaded!</h1>
            </div>
          )}
          <div className="col col-12">
            <hr />
          </div>
          {episodes.map((episode) => (
            <EpisodeCard
              key={episode.id}
              episodeId={episode.id}
              name={episode.name}
              airDate={episode.air_date}
              episode={episode.episode}
            />
          ))}
          <div className="col col-12">
            <hr />
            <div>{errorMessage}</div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Home;
