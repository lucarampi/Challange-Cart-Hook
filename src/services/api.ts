import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://cart-hook-app-lucarampi.vercel.app:3000',
});
