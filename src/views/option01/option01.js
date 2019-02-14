import React, {Component} from "react";
import "./option01.scss"
import {Link} from "react-router-dom";
import ChildrenOfOption01 from "./childrenOfOption01/childrenOfOption01";
import Child2OfOption01 from "./childrenOfOption01/child2OfOption01";

class Option01 extends Component {
    constructor(props) {
        super(props);
        console.log("option01-page");
        this.state = {
            receivedParam: "",
            paramsToChildren: "paramsToChildren01",
            dataToChildren: "dataToChildren02",
            dataFromChild: "",
        };

    }


    render() {
        let receivedParam = '66';
        if (this.props.location.query) {
            receivedParam = this.props.location.query.name + '+669';
        }

        let transMsg = (msg) => {
            console.log(msg);
            let dataFromChild = msg;
            console.log("data from child: " + dataFromChild);
        };

        return (
            <div>
                <div className='option01'>
                    <p>
                        option01-body
                    </p>
                    <p>{receivedParam}</p>
                    <Link to={{pathname: "/fullPage", query: {name: "我来自option01-666"}}}>全屏</Link>
                    <ChildrenOfOption01 params={this.state.paramsToChildren} transMsgF={transMsg}
                                        data2={this.state.dataToChildren}></ChildrenOfOption01>
                    <Child2OfOption01></Child2OfOption01>
                </div>
            </div>
        )
    }
}

export default Option01;