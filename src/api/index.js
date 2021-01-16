import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL || '';
// const loginUrl = process.env.REACT_APP_LOGIN_URL || '';

axios.interceptors.request.use(function (config) {
  // const token = localStorage.getItem('token');
  // config.headers.Authorization =  `Bearer ${token}`;
  config.baseURL = baseUrl;
  return config;
});

export const fetchLostPetsApi = () => {
  return axios.get('/lost.json');
};

export const fetchFoundPetsApi = () => {
  return axios.get('/found.json');
};

