import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://cart-hook-beta.vercel.app/:3333',
});
