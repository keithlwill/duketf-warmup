import React from 'react'

//props coming in: actvity name, start time, duration

class Activity extends React.Component {
    calculateEndTime = (props) => {
        //add this.props.duration to this.props.starttime?
    }

    render() {
        return <h1>You should do: {this.props.activityName} from {this.props.starttime} to {this.props.endtime} </h1>
    }
}

export default Activity