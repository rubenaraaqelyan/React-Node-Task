import axios from "axios";
import Account from "./helpers/Account";

const API_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = Account.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, (e) => Promise.reject(e))

class Api {
  static url = API_URL;

  static login(email, password) {
    return api.post('/users/login', { email, password })
  }

  static register(data) {
    return api.post('/users/register', data)
  }

  static getTodos() {
    return api.get('/todos')
  }

  static createTodo(title, description) {
    return api.post('/todos', { title, description })
  }

  static deleteTodo(id) {
    return api.delete(`/todos/${id}`)
  }

  static updateTodo(id, status) {
    return api.put('/todos', { id, status })
  }

}

export default Api
