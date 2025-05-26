import axios, { type AxiosInstance, AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';

const service: AxiosInstance = axios.create({
    // baseURL: "http://192.168.31.8:8080",
    timeout: 5000
});

service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error: AxiosError) => {
        console.log(error);
        return Promise.reject( error );
    }
);

service.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status === 200) {
            return response;
        } else {
            Promise.reject(response);
        }
    },
    (error: AxiosError) => {
        return Promise.reject( error );
    }
);

export default service;
