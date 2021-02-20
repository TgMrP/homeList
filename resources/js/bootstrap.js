window._ = require("lodash");
import axios from "axios";

let instance = axios.create({
    withCredentials: true
});

instance.interceptors.request.use(request => {
    request.headers.common["Accept"] = "application/json";
    request.headers.common["Content-Type"] = "application/json";
    request.headers.common["X-Requested-With"] = "XMLHttpRequest";
    return request;
});

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 401) {
            sessionStorage.removeItem("user");
            // window.location.reload();
        }

        return Promise.reject(error);
    }
);

window.axios = instance;
