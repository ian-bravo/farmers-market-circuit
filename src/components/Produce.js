import React from "react";
import PropTypes from "prop-types";
import availableProduce from "./month-data";

function Produce(props){
  return (
    <React.Fragment>
      <h3>Month: {props.month}</h3>
      <p> Produce:
          <ul>
            {props.selection.map((item, index) =>
              <li key={index}>{item}</li>
            )}
          </ul>
      </p>
    </React.Fragment>
  )
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
};

export default Produce;