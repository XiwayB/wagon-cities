import React, { Component } from "react";
import { connect } from "react-redux";

class ActiveCity extends Component {
  render(){
    if (this.props.activeCity){
      const style = { backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(https://kitt.lewagon.com/placeholder/cities/'${this.props.activeCity.city.slug}')`
      }
    return (
      <div className="active-city" style={style}>
        <h3>{this.props.activeCity.city.name}</h3>
        <p>{this.props.activeCity.city.address}</p>
      </div>
    )
  } else {
    return
      <div className="active-city" style={style}>
        <h3>No city</h3>
        <p>No address</p>
      </div>
    }
  };
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
