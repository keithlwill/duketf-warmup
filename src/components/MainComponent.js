import React from 'react'
import TimeSelector from './TimeSelector';

function getLocalTime() {
    const d = new Date();
    let localHours = d.getHours();
    let localMinutes = d.getMinutes();
    let localTime = localHours + ":" + localMinutes;
    return localTime;
}


export default class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ready: false }
        this.onTimeChange = this.onTimeChange.bind(this);
        this.onSubmitChange = this.onSubmitChange.bind(this);
    }

    onTimeChange(time) {
        this.setState({ ready: this.state.ready, time: time })
    }

    onSubmitChange(ready) {
        this.setState({ ready: ready, time: this.state.time })
    }


    render() {
        return (
            <div>
                <TimeSelector
                    onSubmitChange={this.onSubmitChange}
                    onTimeChange={this.onTimeChange}
                    localTime={getLocalTime}

                />
            </div>
        )
    }

}