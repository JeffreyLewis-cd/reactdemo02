import React, {Component} from "react"
import {Link} from "react-router-dom";
import "./fullPage.scss";
import 'whatwg-fetch';
import 'es6-promise';
import {Button} from 'antd';
import pubAPI from "../../data/pubAPI"

class FullPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: {},
            arr: [],
        };
    };


    componentDidMount() {
        this.testFetchAsync();
    };

    /*使用fetch-get获取接口数据*/
    getFetchData(seconds) {
        console.log("执行-fetch-get-01");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let getResult = pubAPI.get("/saas/cloud/getCloudType");
                getResult.then((result) => {
                    console.log(result);
                    resolve(result);
                }).catch((error) => {
                    console.log(error);
                    reject(error);
                })
            }, seconds)
        });
    };

    /*使用fetch-post获取接口数据*/
    postFetchData() {
        console.log("执行-fetch-post-02");
        let paramsObj = {sort: "createDate", asc: false, limit: 10, offset: 1};
        let postResult = pubAPI.post("/saas/order/list", paramsObj);
        postResult.then(data => console.log(data))
            .catch(e => console.log("Oops, error", e));
    };

    testFetchAsync = async () => {
        await this.getFetchData(5000);
        await this.postFetchData();
    };


    render() {
        let receivedParam = "66";
        if (this.props.location.query) {
            receivedParam = this.props.location.query.name;
        }
        console.log(receivedParam);

        return (
            <div className="fullPage">
                <h1>全屏显示-66</h1>
                <p>{receivedParam}</p>
                <Link to={"/backend/"}>跳转到后台</Link>
                <br/>
                <Button type="primary" onClick={this.getFetchData} className="pubBtn">测试fetch获取数据-get</Button>
                <br/>
                <Button type="primary" onClick={this.postFetchData} className="pubBtn">测试fetch获取数据-post</Button>
                <br/>
                <Button type="primary" onClick={this.testFetchAsync} className="pubBtn">测试async</Button>
            </div>
        )
    }
}

export default FullPage;