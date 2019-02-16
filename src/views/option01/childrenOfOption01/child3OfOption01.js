import React, {Component} from "react";


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

function Contacts() {
    return <div className="Contacts"><span>Contacts</span></div>;
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