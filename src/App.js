import React, {Component} from 'react';
import './App.css';
import LayoutEle from "./views/layout/layout"


class App extends Component {
    render() {
        return (
            <div className="App">
                <LayoutEle></LayoutEle>
            </div>
        );
    }
}

export default App;
