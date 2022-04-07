const APP = {
  API_URL: "https://apifactory.telkom.co.id:8243",
  // process.env.NODE_ENV === "development"
  //   ? process.env.REACT_APP_API_URL_DEV
  //   : process.env.REACT_APP_API_URL_PROD,
  captchaSiteKey: "6LdGBB8fAAAAAGkk049cP3aVMoTy594ISq8ck1Mx",
  token: localStorage.getItem("token"),
};

export default APP;
