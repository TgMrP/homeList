import axios from 'axios';
import Router from '../Router';

const instance = axios.create({
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

instance.interceptors.response.use(
  response => response,
  error => {
    let name = 'home';

    switch (error.response.status) {
      case 401:
        name = 'login';
        break;
      case 404:
        name = '404';
        break;
      default:
        name = '500';
    }
    Router.push({ name });

    return Promise.reject(error);
  }
);

export default instance;
