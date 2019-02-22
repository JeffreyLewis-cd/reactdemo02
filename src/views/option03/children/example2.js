import React from 'react';
import Backbone from 'backbone';

function connectToBackboneModel(WrappedComponent) {
    return class BackboneComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = Object.assign({}, props.model.attributes);
            this.handleChange = this.handleChange.bind(this);
        }

        componentDidMount() {
            this.props.model.on('change', this.handleChange);
        }

        componentWillReceiveProps(nextProps) {
            this.setState(Object.assign({}, nextProps.model.attributes));
            if (nextProps.model !== this.props.model) {
                this.props.model.off('change', this.handleChange);
                nextProps.model.on('change', this.handleChange);
            }
        }

        componentWillUnmount() {
            this.props.model.off('change', this.handleChange);
        }

        handleChange(model) {
            this.setState(model.changedAttributes());
        }

        render() {
            const propsExceptModel = Object.assign({}, this.props);
            delete propsExceptModel.model;
            return <WrappedComponent {...propsExceptModel} {...this.state} />;
        }
    }
}

function NameInput(props) {
    return (
        <p>
            <input value={props.firstName} onChange={props.handleChange}/>
            <br/>
            My name is {props.firstName}.
        </p>
    );
}

const BackboneNameInput = connectToBackboneModel(NameInput);

function Example(props) {
    function handleChange(e) {
        props.model.set('firstName', e.target.value);
    }

    return (
        <BackboneNameInput
            model={props.model}
            handleChange={handleChange}
        />

    );
}

const model = new Backbone.Model({firstName: 'Frodo11'});

const MyComponents = {
    DatePicker: function DatePicker(props) {
        let myStyle = {
            color: props.color,
        };
        return <div>
            Imagine a {props.color} datepicker here.
            <p style={myStyle}>666</p>
        </div>;
    }
};

function BlueDatePicker() {
    return <MyComponents.DatePicker color="red"/>;
}

function NumberDescriber(props) {
    let description;
    if (props.number % 2 == 0) {
        description = <strong>even</strong>;
    } else {
        description = <i>odd</i>;
    }
    return (
        <div>
            <h3>{props.firstName}</h3>
            <h3>{props.lastName}</h3>
            <p>{props.number} is an {description} number</p>
        </div>
    );
}

const Button = props => {
    const {kind, ...other} = props;
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
    return <button className={className} {...other} >{props.mydoc}</button>;
};

const PickProps = () => {
    return (
        <div>
            <Button kind="primary" mydoc='shamate' onClick={() => console.log("clicked!")}>
                Hello World!
            </Button>
        </div>
    );
};

class ArrayElement extends React.Component {
    render() {
        return [
            // Don't forget the keys :)
            <li key="A">First item</li>,
            <li key="B">Second item</li>,
            <li key="C">Third item</li>,
        ];
    }
}

function Item(props) {
    return <li>{props.message}</li>;
}

function TodoList() {
    const todos = ['finish doc', 'submit pr', 'nag dan to review'];
    return (
        <ul>
            {todos.map((message) => <Item key={message} message={message}/>)}
        </ul>
    );
}

function Caveat(props) {
    function handleChange() {
        console.log('556');
    }

    return (
        <div>
            {props.messages.length > 0 &&
            <input value={props.messages} type='text' onChange={handleChange}/>
            }
        </div>
    );
}


class Example2 extends React.Component {
    render() {
        const props = {firstName: 'John', lastName: 'Wood'};
        return (
            <div>
                <Example model={model}/>
                <BlueDatePicker></BlueDatePicker>
                <NumberDescriber number={3} {...props}></NumberDescriber>
                <PickProps></PickProps>
                <ul>
                    <ArrayElement></ArrayElement>
                    <TodoList></TodoList>
                </ul>
                <Caveat messages='6693'></Caveat>
            </div>
        )
    }
}

export default Example2;