import React, { Component } from "react";
import { connect } from "react-redux";

const ActiveCity = (props) => {
  if (props.activeCity) {
    const style = { backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}')`}
      return (
        <div className="active-city" style={style}>
          <h3>{props.activeCity.name}</h3>
          <p>{props.activeCity.address}</p>
        </div>
      )
  } else {
    return (
      <div className="active-city">
        <h3>No city selected 🥺</h3>
        <p>No address to show off</p>
      </div>
      );
    };
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
