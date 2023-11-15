import React from "react";
import PropTypes from "prop-types";

function Location(props) {
  return (
    <React.Fragment>
      <h3>Day: {props.day}</h3>
      <p>Location: {props.location}</p>
      <p>Hours: {props.hours}</p>
      <p>Booth: {props.booth}</p>
    </React.Fragment>
  );
}

Location.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Location;