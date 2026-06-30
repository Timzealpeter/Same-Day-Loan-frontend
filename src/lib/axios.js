import axios from "axios";

const BASE_URL = "https://same-day-loan-backend.vercel.app/api";

// Create axios instance with default config
const api = axios.create({
  baseURL: BASE_URL,
});
export default api;
