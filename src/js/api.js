
import axios from 'axios';
import { STORAGE_KEY } from './refs';
axios.defaults.baseURL = 'https://connections-api.goit.global';
const token = localStorage.getItem(STORAGE_KEY);
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export async function createUserService(user) {
  const { data } = await axios.post('/users/signup', user);
  return data;
}

export async function loginUserService(user) {
  const { data } = await axios.post('/users/login', user);
  return data;
}

export async function createContactService(contact) { 
    const { data } = await axios.post('/contacts',contact)
    return data;
}


export async function getAllContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}


export async function logoutService() { 
    const { data } = await axios.post('/users/logout')
    return data
}

export async function deleteContactService(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}


