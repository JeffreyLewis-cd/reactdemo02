import React from 'react';
import Backbone from 'backbone';
import ReactDOM from 'react-dom';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.forceUpdate();
    }

    componentDidMount() {
        this.props.model.on('change', this.handleChange);
    }

    componentWillUnmount() {
        this.props.model.off('change', this.handleChange);
    }

    render() {
        return <li>{this.props.model.get('text')}</li>;
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.forceUpdate();
    }

    componentDidMount() {
        this.props.collection.on('add', 'remove', this.handleChange);
    }

    componentWillUnmount() {
        this.props.collection.off('add', 'remove', this.handleChange);
    }

    render() {
        return (
            <ul>
                {this.props.collection.map(model => (
                    <Item key={model.cid} model={model} />
                ))}
            </ul>
        );
    }
}


export default List;