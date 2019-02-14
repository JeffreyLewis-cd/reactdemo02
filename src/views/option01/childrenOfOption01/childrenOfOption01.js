import React, {Component} from "react"

class ChildrenOfOption01 extends Component {
    constructor(props) {
        super(props);
    }

    childToParent = () => {
        console.log("子传父");
        this.props.transMsgF("Hello-666-999");
    };

    render() {
        return (
            <div>
                <h1>ChildrenOfOption01</h1>
                <h2>{this.props.params}</h2>
                <h2>{this.props.data2}</h2>
                <span onClick={this.childToParent}>子传父</span>
            </div>
        )
    }
}

export default ChildrenOfOption01;