import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://github.com/lucarampi/Challange-Cart-Hook/server.json',
});
