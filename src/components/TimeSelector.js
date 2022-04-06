import React from 'react'

export default class TimeSelector extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.props.onTimeChange(event.target.value);
    }

    render() {
        return (
            <div>
                <form className="TimeSelector">
                    <label id="label">What time does your event start? </label>
                    <input id="TimeInput" type="time" value={this.props.currentTime} onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }

}