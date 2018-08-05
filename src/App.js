import React, { Component } from 'react';
import * as locations from './locations.json';


class App extends Component {
  state = {
    venue: locations,
    searchedVenues: '',
    placeToShow: '',
    isOpen: false,
    error: false,
    infoContent: ""
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
