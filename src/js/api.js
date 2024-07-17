// import axios from "axios"
// import { STORAGE_KEY } from "./refs"
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'
// const token = localStorage.getItem(STORAGE_KEY)
// // axios.defaults.headers.common.Authorization = `Bearer ${token}`

// // https://connections-api.herokuapp.com/docs/#/

// export async function createUserService(user) {
//     const { data } = await axios.post('/users/signup',user)
//     return data
// }
import axios from 'axios';
import { STORAGE_KEY } from './refs';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const token = localStorage.getItem(STORAGE_KEY);
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export async function createUserService(user) {
  const { data } = await axios.post('/users/signup', user);
  return data;
}