import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "https://apigwsit.telkom.co.id:7777",
});

// Add a request interceptor
axiosApiIntances.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // Set Up Config Token
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosApiIntances.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 403) {
      alert(error.response.data.message);
      // jika token nya tidak sesuai sama localstorage / statenya
      if (error.response.data.message === "jwt expired") {
      }
      localStorage.clear();
      window.location.href = "/auth";
    }
    return Promise.reject(error);
  }
);

export default axiosApiIntances;
