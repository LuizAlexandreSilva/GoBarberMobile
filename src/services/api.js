import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333', // localhost para ios, 10.0.3.2 para genymotion
});

export default api;
