import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setActiveCity } from "../actions";

class City extends Component {

  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  };

  render() {

    let containerClasses = "list-group-item";
    if (this.props.city === this.props.activeCity) {
      containerClasses += " selected";
    }
    return (
      <div className={containerClasses} onClick={this.handleClick}>
        {this.props.city.name}
      </div>
    );
  }
}

  function mapStateToProps(state) {
    return {
      activeCity: state.activeCity
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      { setActiveCity: setActiveCity },
      dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(City);
