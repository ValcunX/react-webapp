import axios from 'axios';
import Cookies from 'js-cookie';
import { store } from '../store';

axios.interceptors.request.use((config) => {
  const token = store.getState().token;
  const csrftoken = Cookies.get('csrftoken');
  console.log({token, csrftoken});

  if(token) config.headers.Authorization = `Bearer ${token}`;
  if(csrftoken) config.headers.['X-CSRFToken'] = csrftoken;
  return config;
}, (error) => {
  return Promise.reject(error);
});
