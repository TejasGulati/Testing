// src/services/apiService.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding authentication token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null;
    
    switch (status) {
      case 401:
        // Handle unauthorized access
        localStorage.removeItem('authToken');
        window.location.href = '/login';
        break;
      case 403:
        // Handle forbidden access
        console.error('Access forbidden');
        break;
      case 404:
        // Handle not found
        console.error('Resource not found');
        break;
      case 500:
        // Handle server error
        console.error('Internal server error');
        break;
      default:
        console.error('Network error or unknown issue');
    }
    
    return Promise.reject(error);
  }
);

export const apiService = {
  get: (url, config = {}) => apiClient.get(url, config),
  post: (url, data, config = {}) => apiClient.post(url, data, config),
  put: (url, data, config = {}) => apiClient.put(url, data, config),
  delete: (url, config = {}) => apiClient.delete(url, config),
};

export default apiService;