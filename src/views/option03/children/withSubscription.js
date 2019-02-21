import React from "react";
import DataSource from './dataSource'

let WithSubscription = (WrappedComponent, selectData) => {


    function getDisplayName(WrappedComponent) {
        return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }

    WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;

    // ……返回另一个新组件……
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data1: selectData(DataSource, props)
            };
        }

        componentDidMount() {
            // ……注意订阅数据……
            DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }

        handleChange() {
            this.setState({
                data1: selectData(DataSource, this.props)
            });
        }


        render() {
            // ……使用最新的数据渲染组件
            // 注意此处将已有的props属性传递给原组件
            const style = {
                'marginBottom': '30px',
                'border': "1px solid red"
            };
            return (
                <div style={style}>
                    <div>This is a HOC Component...</div>
                    <WrappedComponent data2={this.state.data1} {...this.props} />
                </div>
            );
        }


    };
};


export default WithSubscription;