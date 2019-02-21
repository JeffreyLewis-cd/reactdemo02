import React from 'react'

export default class extends React.Component {
    render() {
        return (
            <div>
                {this.props.data2.map((value) => (
                    <div comment={value} key={value}>{value}</div>
                ))}
            </div>
        );
    }
}