import axios from "axios";

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: process.env.REACT_APP_API,
    },
});

/*API.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('jwt');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete API.defaults.headers.common.Authorization;
    }
    return config;
  },

  error => Promise.reject(error)
);*/