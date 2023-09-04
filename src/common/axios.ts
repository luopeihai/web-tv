import axios from 'axios'


const config = {
    baseURL: 'https://api.tvmaze.com',
    timeout: 5 * 1000, // timeout
    crossDomain: true,
    validateStatus(status: number) {
        return status >= 200 && status < 510
    },
}

const fetch = axios.create(config)


// Add a response interceptor
fetch.interceptors.response.use(
    async res => {
        let { message } = res.data
        if (res.status.toString().charAt(0) === '2') {
            return res
        } else {
            console.log('error message', message)
            return Promise.reject(message)
        }
    },
    error => {
        console.log('error', error)
        return Promise.reject(error)
    },
)

// post 请求
export function post(url: string, data = {}, params = {}) {
    return fetch({
        method: 'post',
        url,
        data,
        params,
    })
}

// get 请求
export function get(url: string, params = {}) {
    return fetch({
        method: 'get',
        url,
        params,
    })
}