import React, { Component } from "react";
import ResultsList from "./components/Results";
import Search from "./components/Search";
import axios from "axios";

export default class App extends Component {
  state = { listOfTracks: [], images: [] };

  result = async (username) => {
    const BASE_URL = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=19830413ee1f97b9351f5ad48a04a78b&format=json`;

    if (username) {
      const response = await axios
        .get(BASE_URL)
        .then((res) => res.data.recenttracks.track);

      this.setState({
        listOfTracks: response,
      });
    } else {
      console.log("Username not entered");
    }
  };

  onSearchSubmit = (term) => {
    this.result(term);
  };

  render() {
    return (
      <div>
        <Search onSubmit={this.onSearchSubmit} />
        <ResultsList listOfTracks={this.state.listOfTracks} />
      </div>
    );
  }
}
