const APP = {
  API_URL: "https://apigwsit.telkom.co.id:7777",
  // process.env.NODE_ENV === "development"
  //   ? process.env.REACT_APP_API_URL_DEV
  //   : process.env.REACT_APP_API_URL_PROD,
  // token:
  //   "eyJraWQiOiJzc29zIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJ1c2VyRGlhcml1bSIsImF1ZCI6WyI4OWViNjg1MC02NTJkLTQwZmQtOGM1MS05YTgwNzNmODI0MjYiLCJ0ZWxrb20iXSwibmJmIjoxNjQ4MTAzMjA4LCJpc3MiOiJ0ZWxrb20uY28uaWQiLCJleHAiOjE2NDgxODk2MDgsImlhdCI6MTY0ODEwMzIwOCwiYXBwX2lkIjoiODllYjY4NTAtNjUyZC00MGZkLThjNTEtOWE4MDczZjgyNDI2In0.g8aVe5TZLGnSYGb8Y0So27TvL8jBUDDGS8ek1btfPDQN56Q0UztF0UtPYI0_0FxR6FAp1PwaJzbDJaJX0buaWicUBzAXaxSQ1plYOvTtBCcFDQoZDpqnvz4biVtOGcifRI1O2fD_8QsA4IlaSGMt8uxh7U3yMXROzPS64fBHxnR-OHWkcMZBqecEyZy7xcgSnKu08u7mTyAjERd3qAr4jvHemp_B7X2hfHBRKA3uHcBHiMvtqsLT9oMDqnVFGWJ8Nf_pMa3WCWC81EYIMl-Ak_Y_IsN3m928sbI3SiunPlPHXZtmKQDDfxHqp6lXoO5MufL-tj4Z7V8-g4svr3E3BQ",
  // checkbox recaptcha
  captchaSiteKey: "6LdGBB8fAAAAAGkk049cP3aVMoTy594ISq8ck1Mx",
  // invisible recaptcha
  // captchaSiteKey: "6LdDqCUfAAAAALNxKOuDPAsoIxSOBUx83eFaJ8NL",
  token: localStorage.getItem("token"),
  captchaSiteKey: "6LdGBB8fAAAAAGkk049cP3aVMoTy594ISq8ck1Mx",
};

export default APP;
