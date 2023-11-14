import React from 'react';
import Location from './Location';

const marketSchedule = [
{
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
},
{
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
},
{
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
},
{
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
},
{
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
},
{
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
}
];

class DayControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      day: "Sunday"
    };
  }

  handleClick = (event) => {
    const clickedDay = event.target.getAttribute("id");
    this.setState(state => ({
      day: clickedDay
    }));

    console.log(this.state.day);
  }

  render() {

    // const stateDay = this.state.day;
    const dayInfo = marketSchedule.filter(element => element.day === this.state.day);

    console.log(dayInfo);

    const currentDayLocation = <Location 
      day={dayInfo[0].day} 
      location={dayInfo[0].location}
      hours={dayInfo[0].hours}
      booth={dayInfo[0].booth} 
      />;

    return (
      <React.Fragment>
        {currentDayLocation}

        {marketSchedule.map((obj, index) =>
        <button id={obj.day} key={index} onClick={this.handleClick}>{obj.day}</button>
        
        )}

      </React.Fragment>
    );
  }

}

export default DayControl;


//click does change state, but when sending through component, it's not setting