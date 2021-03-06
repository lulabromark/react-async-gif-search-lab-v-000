import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: []
  };

  fetchGifs = (search = "italian greyhound") => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(response => response.json())
      .then(({ data }) => {
        this.setState({
          gifs: data.map(gif => ({
            url: gif.images.original.url
          }))
        });
      });
  };

  componentDidMount() {
    this.fetchGifs();
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs.slice(0, 3)} />
      </div>
    );
  }
}
export default GifListContainer;
