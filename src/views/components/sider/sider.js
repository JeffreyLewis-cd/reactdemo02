import {Menu, Icon} from "antd";
import React, {Component} from "react";
import './sider.scss';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

const {SubMenu} = Menu;


class Sider extends Component {
    /*    constructor(props) {
            super(props);
        };*/

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    moveToOption = (item) => {
        console.log("moveToOption-函数");
        console.log(item);
        if ('2' === item.key) {
            this.context.router.history.push({pathname: "/backend/option02", query: {name: "option2-2222"}})
        }
        else if ('1' === item.key) {
            this.context.router.history.push({pathname: "/backend/option01", query: {name: "option1-1111"}})
        }
        else if ('3' === item.key) {
            this.context.router.history.push({pathname: "/backend/option03", query: {name: "option3-33"}})
        }
    };

    render() {
        return (
            <div className="pageSider">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[]}
                    defaultOpenKeys={['sub1']}
                    style={{height: '100%', borderRight: 0}}
                    onClick={this.moveToOption}
                >
                    <SubMenu key="sub1" title={<span><Icon type="user"/><Link to="/backend"> subnav 1</Link></span>}>
                        <Menu.Item key="1"> option1 </Menu.Item>
                        <Menu.Item key="2"> option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="laptop"/>subnav 2</span>}>
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="notification"/>subnav 3</span>}>
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
};


export default Sider;

