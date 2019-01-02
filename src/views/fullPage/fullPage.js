import React, {Component} from "react"
import {Link} from "react-router-dom";
import "./fullPage.scss"

class FullPage extends Component {
    render() {
        let receivedParam = "66";
        if (this.props.location.query) {
            receivedParam = this.props.location.query.name;
        }
        console.log(receivedParam);


        return (
            <div className="fullPage">
                <p>全屏显示-66</p>
                <p>{receivedParam}</p>
                <Link to={"/backend/"}>跳转到后台</Link>
            </div>
        )
    }
}

export default FullPage;