import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://cart-hook-lucarampi.vercel.app:3333',
});
