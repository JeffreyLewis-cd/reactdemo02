import {Breadcrumb} from "antd";
import React, {Component} from "react";
import {Layout} from "antd/lib/index";
import "./mainBody.scss"

const {Content} = Layout;


class mainBody extends Component {
    render() {
        return (
            <div className="mainBody">
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{
                    background: '#fff', padding: 24, margin: 0, minHeight: 500,
                }}
                >
                    Content
                </Content>
            </div>
        )
    }

}

export default mainBody;