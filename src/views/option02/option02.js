import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./option02.scss";
import Child1OfOption2 from "./children/child1OfOption2";
import ContextExample from "./children/context/contextExample";
import ErrorBoundary from "./children/errorBoundaries/errorBoundary";
import BuggyCounter from "./children/errorBoundaries/buggyCounter";


class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}


class Option02 extends Component {
    render() {
        let receivedParam = "66";
        if (this.props.location.query) {
            receivedParam = this.props.location.query.name;
        }
        return (
            <div>
                <div className='option02'>
                    <div className='left'>
                        <input type='text' autoFocus/>
                        <Child1OfOption2></Child1OfOption2>
                        <ContextExample></ContextExample>
                        <ErrorBoundary>
                            <p>These two counters are inside the same error boundary. If one crashes, the error boundary
                                will replace both of them.</p>
                            <BuggyCounter/>
                            <BuggyCounter/>
                        </ErrorBoundary>
                        <hr/>
                        <p>These two counters are each inside of their own error boundary. So if one crashes, the other
                            is not affected.</p>
                        <ErrorBoundary><BuggyCounter/></ErrorBoundary>
                        <ErrorBoundary><BuggyCounter/></ErrorBoundary>
                    </div>
                    <div className='right'>
                        <p>
                            option02-body
                        </p>
                        <p>{receivedParam}</p>
                        <Link to="/">回到homepage</Link>
                        <EssayForm/>
                        <FlavorForm/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Option02;