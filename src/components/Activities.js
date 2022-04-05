import React from 'react'

//prop coming in: start time

//activity name, duration, etc will be handled here?

let chicken = 5

class Activities extends React.Component {
    
    calculateEndTime = (props) => {
        //add this.props.duration to this.props.starttime?
    }

    msTime = (time) => {
        let defaultDate = "December 25, 2000"
        let modifiedTime = time + ":00"
        let compatibleDate = defaultDate + " " + modifiedTime
        let dateObject = new Date(compatibleDate);

        return dateObject.getTime();
    }

    timeConversion = (time) => {
        let defaultDate = "December 25, 2000"
        let modifiedTime = time + ":00"
        let compatibleDate = defaultDate + " " + modifiedTime
        let dateObject = new Date(compatibleDate);

        return dateObject.toLocaleTimeString();
    }

    render() {
        return (
            <div>
                <p>Time in ms is {this.msTime(this.props.startTime)}</p>
                <p>Converting to readable is {this.timeConversion(this.props.startTime)}</p>
                <p>{chicken}</p>
            </div>
        )
    }
}

export default Activities