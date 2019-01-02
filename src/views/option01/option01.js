import React, {Component} from "react";
import "./option01.scss"
import {Link} from "react-router-dom";

class Option01 extends Component {
    render() {
        console.log("option01-page");
        let receivedParam = "66";
        if (this.props.location.query) {
            receivedParam = this.props.location.query.name;
        }
        console.log(receivedParam);
        return (
            <div>
                <div className='option01'>
                    <p>
                        option01-body
                    </p>
                    <p>{receivedParam}</p>
                    <Link to={{pathname: "/fullPage", query: {name: "我来自option01-666"}}}>全屏</Link>
                </div>
            </div>
        )
    }
}

export default Option01;