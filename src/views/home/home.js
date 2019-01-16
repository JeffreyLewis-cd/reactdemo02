import React from "react"
import {Link} from "react-router-dom"
import "./home.scss"

function NumberList(props) {
    const numbers = props.numbers;
    return (
        <ul>{numbers.map((number) =>
            <li key={number.toString()}>{number}</li>
        )}</ul>
    )
}

const numbers = [1, 2, 3, 4, 5, 6];

let Home = (props) => {
    return (
        <div className="home">
            <h2>{props.name}</h2>
            <p>这个homePage</p>
            <Link to="/fullpage">到全屏页</Link>
            <NumberList numbers={numbers}/>
        </div>
    )
};

export default Home;