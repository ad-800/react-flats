import React, { Component } from 'react';
import FlatList from './flat-list';
import flats from '../../data/flats';
import Map from './map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats
    };
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} />
        <Map />
      </div>
    )
  }
}

export default App;
