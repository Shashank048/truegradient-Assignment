
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://truegradient-assignment-1sss.onrender.com',
  withCredentials: true 
});

export default api;
