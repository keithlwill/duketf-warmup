import React from 'react'


export default class Grid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;

        return (
            <div className="table">
                <table>
                    <tbody>
                        <tr>
                            <th>Exercise</th>
                            <th>Start</th>
                            <th>End</th>
                        </tr>
                        {data.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.exercise}</td>
                                    <td>{val.start}</td>
                                    <td>{val.end}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );


    }

}