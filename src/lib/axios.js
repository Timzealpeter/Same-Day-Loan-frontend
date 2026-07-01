import axios from "axios";

// Hardcode the URL for testing
const BASE_URL = "http://localhost:5001/api";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Add this
});

export default api;
