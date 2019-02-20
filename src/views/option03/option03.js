import React, {Component} from 'react';
import FancyButton from "./children/fancyButton"
import fragments from './children/columns'

let Colums = fragments.col;
let Glossary=fragments.gloss;
let animals=[
    {
        id:1,
        term:'horse',
        description:'跑得快'
    },
    {
        id:2,
        term:'chicken',
        description:'烤来吃'
    },
];

class Option03 extends React.Component {
    constructor(props) {
        super(props);
        // 创建一个ref 名字随意
        this.fancyButtonRef = React.createRef();
    }

    componentDidMount() {
        console.log('ref', this.fancyButtonRef.current);
    }

    render() {
        // 直接使用ref={this.fancyButtonRef}
        return (
            <div>
                <FancyButton ref={this.fancyButtonRef}>子组件</FancyButton>
                <table>
                    <tbody>
                        <tr>
                            <Colums/>
                        </tr>
                    </tbody>
                </table>
                <Glossary items={animals}></Glossary>
            </div>
        );
    }
}

export default Option03;