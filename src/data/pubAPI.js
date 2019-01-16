import 'whatwg-fetch';
import 'es6-promise';

let pubAPI = {};
let baseURL = "http://60.205.230.137:19207/boot";

pubAPI.get = (url) => {
    let getURL = baseURL + url;
    let fetchGet = fetch(getURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJTMSIsInd5cXd5cXd5cSI6Im15M2J2eCIsIkhJVkVfVE9LRU4iOiIyNmM1MDdjNjZjYjk4ZWQyMDAyZGM1MjdkZjAwMmRiYSIsImV4cCI6MTU0NzcwNTI1NiwiaWF0IjoxNTQ3NjE4ODU2fQ.Uxx1R5pmHCnDyt3Wy9d3iH_NCF9FL1F_Dn7YwtogvNveCaa4HexGJHFXps5oraTyWbGhZ04Q_h20bOhL0Ugf2Q',
        },
    }).then(response => response.json());
    return fetchGet;
};

pubAPI.post = (url, paramsObj) => {
    let postURL = baseURL + url;
    let fetchPost = fetch(postURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJTMSIsInd5cXd5cXd5cSI6Im15M2J2eCIsIkhJVkVfVE9LRU4iOiIyNmM1MDdjNjZjYjk4ZWQyMDAyZGM1MjdkZjAwMmRiYSIsImV4cCI6MTU0NzcwNTI1NiwiaWF0IjoxNTQ3NjE4ODU2fQ.Uxx1R5pmHCnDyt3Wy9d3iH_NCF9FL1F_Dn7YwtogvNveCaa4HexGJHFXps5oraTyWbGhZ04Q_h20bOhL0Ugf2Q',
        },
        body: JSON.stringify(paramsObj),
    }).then(response => response.json());
    return fetchPost;
};

export default pubAPI;