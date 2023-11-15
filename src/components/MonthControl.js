import React from "react";
import Produce from "./Produce.js";
import availableProduce from "./month-data";

class MonthControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      month: 0
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      month: (prevState.month === 11) ? 0 : prevState.month +1
    }));
  }

  handleDecrement = () => {
    this.setState(prevState => ({
      month: (prevState.month === 0) ? 11 : prevState.month - 1
    }));
  }

  render(){
    //add produce
    const produceInfo = availableProduce[this.state.month];

    const monthlyProduce = <Produce
      month={produceInfo.month}
      selection={produceInfo.selection}
    />

    return (
      <React.Fragment>
        
        <button onClick={this.handleDecrement}>Previous</button>
        <button onClick={this.handleIncrement}>Next</button>
        
        {monthlyProduce}

      </React.Fragment>
    )
  }

}

export default MonthControl;