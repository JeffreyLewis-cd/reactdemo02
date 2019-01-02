import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Option01, Option02, FullPage,} from "./router/async"
import Header from "./views/components/header/header"
import Sider from "./views/components/sider/sider"

const BackendEle = ({match}) => (
    <div>
        <Header/>
        <Sider/>
        <Switch>
            <Route path={`${match.url}`} exact component={App}></Route>
            <Route path={`${match.url}/option01`} component={Option01}></Route>
            <Route path={`${match.url}/option02`} component={Option02}></Route>
        </Switch>
    </div>
);

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/fullpage" component={FullPage}/>
                <Route path="/backend" component={BackendEle}></Route>
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
