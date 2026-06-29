import axios from "axios";

const BASE_URL = "http://localhost:5001/api";

// Create axios instance with default config
const api = axios.create({
  baseURL: BASE_URL,
});
export default api;
