import React from "react";
import Header from "./Header";
import MonthControl from "./MonthControl";
import DayControl from "./DayControl";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <MonthControl />
      <DayControl />
    </React.Fragment>
  );
}

export default App;