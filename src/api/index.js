import axios from "axios";

axios.defaults.timeout = 60000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=-8'

axios.interceptors.response.use(res => {
    let data = res.data
    return data
})

window.axios = axios
