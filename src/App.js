import React from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import QuoteList from "./components/QuoteList";
import QuoteForm from "./components/QuoteForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
    };
    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((response) => response.data)
      .then((quote) => {
        this.setState({
          quote: quote[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <QuoteForm />
        {this.state.quote ? (
          <QuoteList quote={this.state.quote} />
        ) : (
          <p>Loading...</p>
        )}
        <button type="button" onClick={this.getQuote}>
          Get quotes
        </button>
      </div>
    );
  }
}

export default App;
