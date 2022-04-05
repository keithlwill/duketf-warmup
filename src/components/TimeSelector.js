import React from 'react'

export default class TimeSelector extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.timeChanged) {
            this.props.onSubmitChange();
        }
        else {
            alert("Please enter your event's time!")
        }

    }

    handleChange(event) {
        this.props.onTimeChange(event.target.value);
    }

    render() {
        return (
            <div>
                <form className="TimeSelector" onSubmit={this.handleSubmit}>
                    <label id="label">What time does your event start? </label>
                    <input id="TimeInput" type="time" onChange={this.handleChange}></input>
                    <input type="submit" value="Submit time"></input>
                </form>
            </div>
        )
    }

}