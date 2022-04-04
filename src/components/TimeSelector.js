import React from 'react'

const d = new Date();
let localHours = d.getHours() 
let localMinutes = d.getMinutes()

let localTime = localHours + ":" + localMinutes

export default function TimeSelector() {
    return (
        <div>
            <form class = "TimeSelector">
                <label id = "label">What time does your event start?</label>
                <input id = "TimeInput" type="time" defaultValue = {localTime} ></input>
                <input type = "submit" value = "Submit time"></input>
            </form>
        </div>
    );
}