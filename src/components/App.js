import React from "react";
// import Header from "./Header";
import MonthControl from "./MonthControl";
import DayControl from "./DayControl";
import "./../App.css";

function App(){
  return ( 
    <React.Fragment>
      {/* <Header /> */}
      <MonthControl />
      <DayControl />
    </React.Fragment>
  );
}

export default App;