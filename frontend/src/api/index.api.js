
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://truegradient-assignment-steel.vercel.app/',
  withCredentials: true 
});

export default api;
