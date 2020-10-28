import React from "react";
import "./QuoteList.css";

function QuoteList({ quote }) {
  return (
    <figure className="QuoteList">
      <img src={quote.image} alt={quote.character} />
      <figcaption>
        <blockquote>{quote.quote}</blockquote>
        <p>
          <cite>{quote.character}</cite>
        </p>
      </figcaption>
    </figure>
  );
}

export default QuoteList;
