import axios from "axios";
const api = axios.create({
  baseURL: "https://reqres.in/api/",
});

api.interceptors.request.use(
  function (config) {
    // If authorization add token here

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use((response) => {
  return response;
});

export default api;
