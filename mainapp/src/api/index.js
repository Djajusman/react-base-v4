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
  const tokenAuth = "ZGlhcml1bV83MzI4NzA1OTQ6WGN2Y3pFM1RkWFFQ";
  return axios.post(fullURL(api), data, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Accept': '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
      "x-authorization": `Basic ${tokenAuth}`,
      Authorization: `Bearer ${CONFIG.token}`,
      // 'apikey': process.env.REACT_APP_API_KEY
    },
  });
};

const get = (api) => () => {
  return axios(
    `${fullURL(api)}`,
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
        Authorization: `Basic ${tokenAuth}`,
        
        // 'apikey': process.env.REACT_APP_API_KEY
      },
    },
    { handleNetworkError }
  ).catch((err) => {
    console.log(err);
  });
};

// Authentication
export const postUser = post("users");
export const postLoginAuth = post(
  "gateway/telkom-diarium-auth/1.0/authService/oauth/token"
);

const API = {
  postUser,
  postLoginAuth,
};

export default API;
