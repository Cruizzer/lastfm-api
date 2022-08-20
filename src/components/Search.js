import React, { Component } from "react";

export default class Search extends Component {
  state = { text: " " };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.text);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Enter your Last.Fm Username:</label>
            <input
              type="text"
              placeholder="HansonDz"
              onChange={(e) => this.setState({ text: e.target.value })}
            />
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
