import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://lucarampi.github.io/Challange-Cart-Hook/server.json',
});
