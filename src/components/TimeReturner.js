import { render } from '@testing-library/react';
import React from 'react'

const d = new Date();
let localHours = d.getHours();
let localMinutes = d.getMinutes();

let localTime = localHours + ":" + localMinutes;


class TimeReturner extends React.Component {

    state = {
        eventStartTime: localTime
    }

    timeConversion = (time) => {
        let defaultDate = "December 25, 2000"
        let modifiedTime = time + ":00"
        let compatibleDate = defaultDate + " " + modifiedTime
        let dateObject = new Date(compatibleDate);

        return dateObject.toLocaleTimeString();
    }

    subtractTime = (time, mins) => {
        let defaultDate = "December 25, 2000"
        let modifiedTime = time + ":00"
        let compatibleDate = new Date(defaultDate + " " + modifiedTime)

        let ms = compatibleDate.getTime()

        let subtraction = ms - (mins * 60000)

        let subDate = new Date(subtraction)

        return subDate.toLocaleTimeString();

    }

    handleTimeChange = (event) => {
        this.setState(
            {eventStartTime: event.target.value}
        )
    }

    render() {
        return(
            <form className = "TimeInput">
                <label id = "label">What time does your event start?</label>
                <input id = "TimeInput" type="time" defaultValue = {localTime} onChange = {this.handleTimeChange}></input>
                <input type = "submit" value = "Submit time"></input>
                <h1>The selected time is: {this.state.eventStartTime}</h1>
                <h1>Practicing working with dates! {this.timeConversion(this.state.eventStartTime)}</h1>
                <h1>Subtracting 5 minutes: {this.subtractTime(this.state.eventStartTime, 5)}</h1>
            </form> 
        )
    }
}

export default TimeReturner;