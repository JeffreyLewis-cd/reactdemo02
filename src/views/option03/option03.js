import React, {Component} from 'react';
import FancyButton from "./children/fancyButton";
import fragments from './children/columns';
import HigherOrderComponents from "./children/higherOrderComponents";
import './option03.scss';
import Example from './children/example';
import ParagraphView from './children/paragraphView';
import Backbone from 'backbone';
import Example2 from './children/example2';


let Colums = fragments.col;
let Glossary = fragments.gloss;
let animals = [
    {
        id: 1,
        cid: 1,
        term: 'horse',
        description: '跑得快'
    },
    {
        id: 2,
        cid: 2,
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
        const collection = new Backbone.Collection([
            new Backbone.Model({ text: 'A' }),
            new Backbone.Model({ text: 'B' }),
            new Backbone.Model({ text: 'C' })
        ]);


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
                    <ParagraphView collection={collection}></ParagraphView>
                    <Example2></Example2>
                </div>
            </div>
        );
    }
}

export default Option03;