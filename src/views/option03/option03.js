import React, {Component} from 'react';
import FancyButton from "./children/fancyButton";
import fragments from './children/columns';
import HigherOrderComponents from "./children/higherOrderComponents";
import './option03.scss';
import Example from './children/example';

let Colums = fragments.col;
let Glossary = fragments.gloss;
let animals = [
    {
        id: 1,
        term: 'horse',
        description: '跑得快'
    },
    {
        id: 2,
        term: 'chicken',
        description: '烤来吃'
    },
];

class Option03 extends React.Component {
    constructor(props) {
        super(props);
        // 创建一个ref 名字随意
        this.fancyButtonRef = React.createRef();
    }

    componentDidMount() {

    }

    render() {
        // 直接使用ref={this.fancyButtonRef}
        return (
            <div className='option03'>
                <div className='left'>
                    <FancyButton ref={this.fancyButtonRef}>子组件</FancyButton>
                    <table>
                        <tbody>
                        <tr>
                            <Colums/>
                        </tr>
                        </tbody>
                    </table>
                    <Glossary items={animals}></Glossary>
                    <HigherOrderComponents className='HOC'></HigherOrderComponents>
                </div>
                <div className='right'>
                    <Example></Example>

                </div>
            </div>
        );
    }
}

export default Option03;