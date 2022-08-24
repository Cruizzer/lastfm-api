import React, { Component } from "react";
import ResultsList from "./components/Results";
import Search from "./components/Search";
import axios from "axios";
const BASE_URL = "http://ws.audioscrobbler.com/2.0/";
const API_KEY = "19830413ee1f97b9351f5ad48a04a78b";

export default class App extends Component {
  state = {
    user: "",
    listOfTracks: [],
    realName: "",
    profilePic: "",
    country: "",
    playcount: "",
    errorMessage: "",
  };

  getUser = async (username) => {
    try {
      const response = await axios
        .get(
          BASE_URL +
            `?method=user.getinfo&user=${username}&api_key=${API_KEY}&format=json`
        )
        .then((res) => res.data.user);

      this.setState({
        realName: response.realname,
        profilePic: Object.values(response.image[2])[1],
        country: response.country,
        playcount: response.playcount,
      });

      console.log(response.playcount);
    } catch (e) {
      console.log(e.response);
      this.setState({
        errorMessage: e.request.statusText,
      });
    }
  };

  getTracks = async (username) => {
    try {
      const response = await axios
        .get(
          BASE_URL +
            `?method=user.getrecenttracks&user=${username}&api_key=${API_KEY}&format=json`
        )
        .then((res) => res.data.recenttracks.track);

      if (response.length === 0) {
        this.setState({
          errorMessage: "User has no tracks!",
        });
      } else {
        this.setState({
          listOfTracks: response,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  onSearchSubmit = (username) => {
    this.setState({ errorMessage: "" });
    if (username.trim() === "") {
      console.log("Empty Username!");
      console.log(username);
    } else {
      this.setState({ user: username });
      this.getUser(username);
      this.getTracks(username);
    }
  };

  render() {
    return (
      <>
        <Search onSubmit={this.onSearchSubmit} />
        <ResultsList
          listOfTracks={this.state.listOfTracks}
          realName={this.state.realName}
          profilePic={this.state.profilePic}
          country={this.state.country}
          playcount={this.state.playcount}
          errorMessage={this.state.errorMessage}
        />
      </>
    );
  }
}
