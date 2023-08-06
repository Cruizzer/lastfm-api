import React, { Component } from "react";
import ResultsList from "./components/Results";
import Search from "./components/Search";
import axios from "axios";
const BASE_URL = "https://ws.audioscrobbler.com/2.0/";

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
            `?method=user.getinfo&user=${username}&api_key=${process.env.REACT_APP_API_KEY}&format=json`
        )
        .then((res) => res.data.user);

      this.setState({
        realName: response.realname,
        profilePic: Object.values(response.image[2])[1],
        country: response.country,
        playcount: response.playcount,
      });
    } catch (e) {
      this.setState({
        errorMessage: e.response.data.message,
      });
    }
  };

  getTracks = async (username) => {
    try {
      const response = await axios
        .get(
          BASE_URL +
            `?method=user.getrecenttracks&user=${username}&api_key=${process.env.REACT_APP_API_KEY}&format=json`
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
    } catch (e) {}
  };

  onSearchSubmit = (username) => {
    this.setState({ errorMessage: "" });
    if (username.trim() === "") {
      this.setState({ errorMessage: "Empty username!" });
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
