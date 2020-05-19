import axios from 'axios'

let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export default () => {
    return axios.create({
        baseURL: 'http://127.0.0.1/api',
        headers: headers,
        timeout: 600000
    })
}
