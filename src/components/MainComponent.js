import React from 'react'
import Grid from './Grid';
import TimeSelector from './TimeSelector';

function timeToString(t, printable) {

    let hours = t[0];
    let mins = t[1];

    let PM = false;
    let toAdd = "";
    if (printable) {
        if (hours >= 12) {
            PM = true;
            if (hours > 12) {
                hours -= 12;
            }
        }
    }


    if (mins < 10) {
        toAdd = "0";
    }

    let ret = hours.toString() + ":" + toAdd + mins.toString();
    if (PM) {
        ret += " PM";
    }
    else if (printable) ret += " AM";


    return ret;
}

function addTimes(time1, time2) {
    let ret = [0, 0]
    ret[0] = time1[0] + time2[0];
    ret[1] = time1[1] + time2[1];

    if (ret[1] >= 60) {
        ret[1] -= 60;
        ret[0] += 1;
    }
    if (ret[1] < 0) {
        ret[1] += 60;
        ret[0] -= 1;
    }

    if (ret[0] >= 24) {
        ret[0] -= 24;
    }

    return ret;
}

function getList(eventTime) {
    let lst = [
        "Check-in, Put Approaches Out",
        "General Warm Up",
        "Bow",
        "Snake Runs on Track x2",
        "Full Approach Run Through x2",
        "Full Approach Pop-Up x1",
        "Full Approach Jumps x2-3",
        "Rest"
    ];


    let startEndTimes = {
        "Check-in, Put Approaches Out": [[0, 0], [0, 15]],
        "General Warm Up": [[0, 15], [0, 45]],
        "Bow": [[0, 45], [1, 0]],
        "Snake Runs on Track x2": [[1, 0], [1, 15]],
        "Full Approach Run Through x2": [[1, 15], [1, 30]],
        "Full Approach Pop-Up x1": [[1, 30], [1, 45]],
        "Full Approach Jumps x2-3": [[1, 45], [2, 0]],
        "Rest": [[2, 0], [2, 15]]
    }

    let negativeStartEndTimes = {
        "Check-in, Put Approaches Out": [[-2, -15], [-2, 0]],
        "General Warm Up": [[-2, 0], [-1, -30]],
        "Bow": [[-1, -30], [-1, -15]],
        "Snake Runs on Track x2": [[-1, -15], [-1, 0]],
        "Full Approach Run Through x2": [[-1, 0], [0, -45]],
        "Full Approach Pop-Up x1": [[0, -45], [0, -30]],
        "Full Approach Jumps x2-3": [[0, -30], [0, -15]],
        "Rest": [[0, -15], [0, 0]]
    }


    let now = new Date();
    let currHour = now.getHours();
    let currMin = now.getMinutes();

    let hour = parseInt(eventTime.split(":")[0]);
    let min = parseInt(eventTime.split(":")[1]);

    currMin = (currMin % 5 == 0) ? currMin : currMin + (5 - (currMin % 5));
    negativeStartEndTimes["Rest"][1][1] += min % 5;
    min = (min % 5 == 0) ? min : min - (min % 5);

    let eventInterval = [hour, min];


    if (currMin >= 60) {
        currMin -= 60;
        currHour++;
    }

    let currTime = [currHour, currMin];


    if ((hour - currHour) * 60 + (min - currMin) > 135) {
        currTime = addTimes([hour, min], [-2, -15])
    }


    let data = lst.map((x) => ({
        exercise: x,
        start: timeToString(addTimes(eventInterval, negativeStartEndTimes[x][0]), true),
        end: timeToString(addTimes(eventInterval, negativeStartEndTimes[x][1]), true)
    }));


    return data;
}


export default class MainComponent extends React.Component {
    constructor(props) {
        let d = new Date();
        let m = (d.getMinutes() % 5 == 0) ? d.getMinutes() : d.getMinutes() + (5 - (d.getMinutes() % 5));
        let h = (m == 60) ? d.getHours() + 1 : d.getHours();
        if (h == 24) h = 0;

        let startDefault = addTimes([h, m], [2, 15]);

        super(props);
        this.state = {

            time: timeToString(addTimes([h, m], [2, 15]), false),
            data: getList(timeToString(addTimes([h, m], [2, 15]), false)),
        }

        this.onTimeChange = this.onTimeChange.bind(this);
    }

    onTimeChange(time) {
        this.setState({
            time: time,
            data: getList(time),
        })
    }

    onSubmitChange() {
        this.setState({
        })
    }

    render() {
        return (
            <div>
                <TimeSelector
                    onTimeChange={this.onTimeChange}
                    timeChanged={this.state.timeChanged}
                    currentTime={this.state.time}
                />
                <Grid
                    data={this.state.data}
                />
            </div>
        )
    }

}