import React, {Component, Fragment} from "react";

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}


function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}

function WelcomeDialog() {
    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!"/>

    );
}


function Glossary(props) {
    function gloClick() {
        props.gloClickParent();
    }

    return (
        <dl>
            {props.items.map(item => (
                // Fragments should also have a `key` prop when mapping collections
                <Fragment key={item.id}>
                    <dt>{item.term}</dt>
                    <dd onClick={gloClick}>{item.description}</dd>
                </Fragment>
            ))}
        </dl>
    );
}


class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
    }


    render() {
        // tell React that we want to associate the <input> ref
        // with the `textInput` that we created in the constructor
        let GlossaryList = [
            {
                id: 0,
                term: "水果",
                description: "富含维生素"
            }
        ];
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput}/>

                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
                <span onClick={this.focusTextInput}>Focus Test</span>
                <Glossary items={GlossaryList} gloClickParent={this.focusTextInput}></Glossary>
            </div>
        );
    }
}


class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.cusInput = React.createRef();
    }

    clickLabel = () => {
        console.log(this.cusInput);
        this.cusInput.current.focusTextInput();
    };

    render() {
        return (
            <div className="Contacts">
                <span onClick={this.clickLabel}>Contacts</span><br/>
                <label htmlFor="namedInput">Name:</label>
                <input id="namedInput" type="text" name="name"/>
                <CustomTextInput ref={this.cusInput}></CustomTextInput>
            </div>
        );
    }


}

function Chat() {
    return <div className="Chat">
        <span>Chat</span>
        <WelcomeDialog></WelcomeDialog>
    </div>;
}


function SplitPane(props) {


    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}


class Child3OfOption01 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>BoilingVerdict</p>
                <SplitPane
                    left={
                        <Contacts/>
                    }
                    right={
                        <Chat/>
                    }/>
            </div>
        )
    }
}

export default Child3OfOption01;