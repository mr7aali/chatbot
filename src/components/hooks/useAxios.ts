import axios from "axios";

const instance = axios.create({

    baseURL: "https://chatbot-backend-steel.vercel.app/",
    timeout: 10000,
    headers: { "Content-Type": "Application/json" }
});


instance.interceptors.request.use(function (config) {

    return config;
}, function (error) {

    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {

    return response;
}, function (error) {

    return Promise.reject(error);
});

export const Axios = instance;
