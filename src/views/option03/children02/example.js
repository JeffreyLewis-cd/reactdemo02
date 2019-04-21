import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class Chosen extends React.Component {
    componentDidMount() {
        this.$el = $(this.el);
        this.handleChange = this.handleChange.bind(this);
        this.$el.on('change', this.handleChange);
    }

    componentWillUnmount() {
        this.$el.off('change', this.handleChange);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.children !== this.props.children) {
            this.$el.trigger("chosen:updated");
        }
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div>
                <select className="Chosen-select" ref={el => this.el = el}>
                    {this.props.children}
                </select>
            </div>
        );
    }
}

function Example() {
    function selectChange(e) {
        console.log('选择有变化！');
        console.log(e);
    }

    function Button() {
        return <button id="btn">Say Hello- ReactDOM.render</button>;
    }

    ReactDOM.render(
        <Button/>,
        document.getElementById('containerReactDom'),
        function () {
            $('#btn').click(function () {
                alert('Hello-   ReactDOM.render!');
            });
        }
    );


    return (
        <div>
            <Chosen onChange={selectChange}>
                <option>vanilla</option>
                <option>chocolate</option>
                <option>strawberry</option>
            </Chosen>

        </div>
    );
}


export default Example;
