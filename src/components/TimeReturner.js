import { render } from '@testing-library/react';
import React from 'react'
import Activities from './Activities';

const d = new Date();
let localHours = d.getHours();
let localMinutes = d.getMinutes();

let localTime = localHours + ":" + localMinutes;


class TimeReturner extends React.Component {

    state = {
        eventStartTime: localTime,
        submission: false
    }


    handleTimeChange = (event) => {
        this.setState(
            {eventStartTime: event.target.value}
        )
    }

    handleSubmission = (event) => {
        event.preventDefault();
        this.setState(
            {submission: true}
        )
    }

    render() {
        return(
            <div>
            <form className = "TimeInput">
                <label id = "label">What time does your event start?</label>
                <input id = "TimeInput" type="time" defaultValue = {localTime} onChange = {this.handleTimeChange}></input>
                <input id = "button" type = "submit" value = "Submit Time" onClick={this.handleSubmission}></input>
                <h1>State of eventStartTime is {this.state.eventStartTime}</h1>
                <h1>State of submission is {this.state.submission}</h1>
            </form> 
            <div className='schedule' style={{visibility: this.state.submission ? 'visible' : 'hidden'}}>
                <Activities startTime = {this.state.eventStartTime} />
            </div>
            </div>
        )
    }
}

export default TimeReturner;