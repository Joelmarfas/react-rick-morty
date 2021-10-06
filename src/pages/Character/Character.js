/* eslint-disable react/style-prop-object */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import axios from "axios";
import "./Character.scss";
import EpisodeCard from "../../components/EpisodeCard";
import Layout from "../../components/Layout";

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

      episodesList: [],
    };
  }

  async componentDidMount() {
    await this.infoCharacter();
    await this.episodesCharacter();
  }

  async infoCharacter() {
    // console.log(this.props.match.params.characterId);
    try {
      const characterId = this.props.match.params.characterId;
      const urlCharacter = `https://rickandmortyapi.com/api/character/${characterId}`;
      const axiosCharacter = await axios.get(urlCharacter);
      // console.log(axiosCharacter.data);
      const result = axiosCharacter.data;
      this.setState({
        image: result.image,
        name: result.name,
        species: result.species,
        status: result.status,
        origin: result.origin.name,
        location: result.location.name,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async episodesCharacter() {
    console.log(this.props.match.params.characterId);
    const matchId = this.props.match.params.characterId;
    const urlEpisodesCharacter = `https://rickandmortyapi.com/api/character/${matchId}`;
    const axiosList = await axios.get(urlEpisodesCharacter);
    // console.log(axiosList);
    const list = axiosList.data.episode;
    // console.log(list);
    const arrList = await axios.all(list.map((episode) => axios.get(episode)));
    // console.log(arrList);

    this.setState({
      episodesList: arrList,
    });
  }

  render() {
    const {
      image,
      name,
      species,
      status,
      origin,
      location,
      episodesList,
    } = this.state;
    return (
      <Layout>
        <section className="wraper">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={image} alt="" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <hr />
                  <h6>
                    <strong>CHARACTER</strong>
                  </h6>
                  <p>
                    {species} | {status}
                  </p>
                  <div className="d-flex">
                    <div className="pading">
                      <h6>
                        <strong>ORIGIN</strong>
                      </h6>
                      <p>{origin}</p>
                    </div>
                    <div>
                      <h6>
                        <strong>LOCATION</strong>
                      </h6>
                      <p>{location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wraper">
          <hr />
          <h6>
            <strong>EPISODES</strong>
          </h6>
          <hr />
          <div className="row">
            <div className="row">
              {episodesList.map((episodeList) => (
                <EpisodeCard
                  key={episodeList.data.id}
                  episodeId={episodeList.data.id}
                  name={episodeList.data.name}
                  airDate={episodeList.data.air_date}
                  episode={episodeList.data.episode}
                />
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
