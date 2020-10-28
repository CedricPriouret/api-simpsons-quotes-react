import React from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import QuoteList from "./components/QuoteList";

const sampleQuote = {
  quote:
    "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
  character: "Homer Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: sampleQuote,
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          quote: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <QuoteList quote={this.state.quote} />
        <button type="button" onClick={this.getQuote}>
          Get quotes
        </button>
      </div>
    );
  }
}

export default App;
