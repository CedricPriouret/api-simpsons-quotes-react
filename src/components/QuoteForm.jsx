import React, { Component } from "react";
import "./QuoteForm.css";

const MAX_LENGTH = 30; // You can change the value

class QuoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    if (event.target.value.length <= MAX_LENGTH) {
      this.setState({ character: event.target.value });
    }
  }

  render() {
    const maximumReached = this.state.character.length >= MAX_LENGTH;

    const numRemaining = MAX_LENGTH - this.state.character.length;
    return (
      <form className="QuoteForm" onSubmit={this.handleSubmit}>
        <label htmlFor="character">Character:</label>
        <input
          className={maximumReached ? "length-maximum-reached" : "length-ok"}
          id="name"
          name="character"
          type="text"
          value={this.state.character}
          onChange={this.handleChange}
        />
        <small className="remaining-characters">
          {numRemaining} remaining characters
        </small>
        <p>
          You typed: <strong>{this.state.character}</strong>
        </p>
      </form>
    );
  }
}

export default QuoteForm;
