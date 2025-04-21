import axios from "axios";

const MODE = import.meta.env.MODE || "development";
const BACKEND_URL =
  MODE === "production"
    ? import.meta.env.VITE_BACKEND_URL_PROD
    : import.meta.env.VITE_BACKEND_URL_DEV;

const apiPublic = axios.create({
  baseURL: `${BACKEND_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiPublic;