/**
* raoyan
* 2020-7-25
* 用于异步ajax
*/

import axios from 'axios'
axios.interceptors.response.use(res => {
    const result = res || {}
    if (result.status === 200) {
        return result.data
    }
});

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data) {
    let ret = '';
    for (let it in data) {
        ret += `${encodeURIComponent(it)}=${encodeURIComponent(data[it])}&`
    }
    return ret;
}];

export default axios;