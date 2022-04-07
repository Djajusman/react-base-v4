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

const post = (api) => (data) => {
  const tokenAuth = "d2ViYXBwXzgzNDc2NTM0MjpHREZ5dTI3WGN2WGQ=";
  return axios.post(fullURL(api), data, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
      "x-authorization": `Basic ${tokenAuth}`,
      Authorization: `bearer ${tokenAuth}`,
      // 'apikey': process.env.REACT_APP_API_KEY
    },
  });
};

const get = (api) => () => {
  const basicToken = "dXNlckRpYXJpdW06ZGlhcml1bVVzZXIjMTIz";
  return axios(
    `${fullURL(api)}`,
    {
      method: "GET",
      withCredentials: "true",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Credentials": "true",
        "Content-type": "application/json",
        Authorization: `Basic ${basicToken}`,

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
  "hcm/api/diarium/authorization/v1/oauth/token"
);
export const getTokenBasic = get(
  "rest/pub/apigateway/jwt/getJsonWebToken?app_id=89eb6850-652d-40fd-8c51-9a8073f82426"
);

const API = {
  postUser,
  postLoginAuth,
  getTokenBasic,
};

export default API;
