import React from "react";
import Unsplash from "../API/Unsplash";
import SearchBar from "./SearchBar";
import ImagelIst from './ImageList';

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit=async (term)=>{
    const response = await Unsplash.get(
      "/search/photos",
      {
        params: { query: term },
      }
    );
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        <ImagelIst  images={this.state.images}/>
        Found:{this.state.images.length} images
      </div>
    );
  }
}
export default App;
