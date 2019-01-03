import React from "react"
import {Link} from "react-router-dom"
import "./home.scss"

let Home = (props) => {
    return (
        <div className="home">
            <h2>{props.name}</h2>
            <p>这个homePage</p>
            <Link to="/fullpage">到全屏页</Link>
        </div>
    )
};

export default Home;