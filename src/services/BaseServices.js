import axios from 'axios';

const axiosInstance = axios.create();

export const axiosRequestConfig = {
    headers: { 'x-api-key': '1597d07727b645f7acfeb273ec92501f' },
    params: {},
}

export default class SuperService {
    async get(url, config = null) {
        return await axiosInstance.get(url, config || axiosRequestConfig).then((res) => res.data);
    }
}
