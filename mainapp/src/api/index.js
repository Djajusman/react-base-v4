import axios from "axios";
import CONFIG from "../config";

const fullURL = (path) => {
  return `${CONFIG.API_URL}/${path}`;
};

export const handleNetworkError = (error) => {
  if (error.message === "Network request failed") {
    alert(
      "Kesalahan Jaringan",
      "Silakan periksa koneksi Anda dan coba kembali.",
      "iconNoInet"
    );
  }
  throw error;
};

const post = (api) => (data, token) => {
  return axios.post(fullURL(api), data, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
      Authorization: `Bearer ${CONFIG.token}`,
      // 'apikey': process.env.REACT_APP_API_KEY
    },
  });
};

const get = (api) => (token) => {
  return axios(
    `${fullURL(api)}`,
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
        // 'apikey': process.env.REACT_APP_API_KEY
      },
    },
    { handleNetworkError }
  ).catch((err) => {
    console.log(err);
  });
};

const getWithSlug = (api) => (slug, token) => {
  return axios(
    `${fullURL(api)}${slug}`,
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
        // 'apikey': process.env.REACT_APP_API_KEY
      },
    },
    { handleNetworkError }
  ).catch((err) => {});
};

// export const socialMedia = post('social-media')
export const getUserList = get("users");
export const postUser = post("users");
// export const getUserScore = getWithSlug('users')
export const postRegisterAuth = post("users");

const API = {
  postUser,
  getUserList,
};

export default API;
