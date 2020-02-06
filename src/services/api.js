import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333', // localhost para ios, 10.0.3.2 para genymotion
});

export default api;
