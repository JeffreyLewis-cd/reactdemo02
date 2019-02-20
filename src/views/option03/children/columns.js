import React from 'react';

let fragments = {
    col: '',
    gloss: ''
};

class Colums extends React.Component {

    render() {
        return (
            <React.Fragment>
                <td>1001</td>
                <td>1002</td>
            </React.Fragment>
        )
    }
}

function Glossary(props) {
    return (
        <dl>
            {
                props.items.map(item => (
                    <React.Fragment key={item.id}>
                        <dt>{item.term}</dt>
                        <dd>{item.description}</dd>
                    </React.Fragment>
                ))
            }
        </dl>
    )
}

fragments.col = Colums;
fragments.gloss = Glossary;

export default fragments;