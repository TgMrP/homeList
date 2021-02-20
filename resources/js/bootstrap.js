import axios from 'axios';

window._ = require('lodash');

const instance = axios.create({
  withCredentials: true,
});

instance.interceptors.request.use(request => {
  request.headers.common.Accept = 'application/json';
  request.headers.common['Content-Type'] = 'application/json';
  request.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  return request;
});

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      // TODO: 401 page
      sessionStorage.removeItem('user');
      // window.location.reload();
    } else if (error.response.status === 404) {
      // TODO: 404 page
      window.history.back();
    } else {
      // TODO: 500 page
      window.history.back();
    }

    return Promise.reject(error);
  }
);

window.axios = instance;
