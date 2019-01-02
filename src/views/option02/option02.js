import React, {Component} from "react";
import "./option02.scss"


class Option02 extends Component {
    render() {
        console.log("option02-page");
        let receivedParam = "66";
        if (this.props.location.query) {
            receivedParam = this.props.location.query.name;
        }
        console.log(receivedParam);
        return (
            <div>
                <div className='option02'>
                    <p>
                        option02-body
                    </p>
                    <p>{receivedParam}</p>
                </div>
            </div>
        )
    }
}

export default Option02;