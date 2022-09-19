import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  renderFlats = () => {
    return this.props.flats.map(flat => {
      return <Flat id={flat.id} key={flat.id} price={flat.price} name={flat.name} currency={flat.priceCurrency} url={flat.imageUrl} />
    });
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderFlats()}
      </div>
    );
  }
}

export default FlatList;
