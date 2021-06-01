import React, { Component } from 'react';
import City from './city.jsx';

class CityList extends Component {

  handleDisplay = (gifId) => {
    this.props.display(gifId)
  }

  renderList = () => {
    return this.props.cities.map(city =>
        <City name={city.name} key={city.name} address={city.address} handleDisplay={this.handleDisplay}/>
    );
  }
  render() {
    return (
      <div className="cities">
        {this.renderList()}
      </div>
    );
  }
}

export default CityList;
