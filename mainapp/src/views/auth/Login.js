import { async } from "@firebase/util";
import { SpanRecorder } from "@sentry/tracing/dist/span";
import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { postLoginAuth } from "../../api/index";
import qs from "qs";
import { parse } from "himalaya";
// import Captcha from "../../components/Captcha/Captcha";
import { useDispatch, useSelector } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";
import CONFIG from "../../config";

export default function Login(props) {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const dispatch = useDispatch();
  const isValidCaptcha = useSelector((state) => state.isValidCaptcha);
  const [agree, setAgree] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState(null);
  const history = useHistory();

  const acessToken = localStorage.getItem("token");
  console.log(acessToken);
  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${acessToken}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    dispatch({ type: "set", isValidCaptcha: false });
  }, [1]);

  useEffect(() => {
    getToken();
  }, []);

  // validasi
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  // handle login
  const Login = async (e) => {
    try {
      e.preventDefault();
      const grant_type = "password";
      const response = await postLoginAuth(
        qs.stringify({
          username: username,
          password: password,
          grant_type: grant_type,
        })
      );
      await localStorage.setItem("acces_token", response.data.access_token);
      await localStorage.setItem("refresh_token", response.data.refresh_token);
      await localStorage.setItem("nama", response.data.nama);
      await localStorage.setItem("unit", response.data.unit);
      await localStorage.setItem("jabatan", response.data.jabatan);
      props.history.push("/admin");
      console.log(response);
    } catch (error) {
      setError(error.message);
    }
  };

  // check captcha
  function onCheckCaptcha(value) {
    console.log("Captcha value:", value);
    dispatch({ type: "set", isValidCaptcha: true });
  }

  // get token
  const getToken = async () => {
    try {
      const response = await axios.get(
        "rest/pub/apigateway/jwt/getJsonWebToken?app_id=89eb6850-652d-40fd-8c51-9a8073f82426"
      );
      const res = parse(response.data);
      localStorage.setItem(
        "token",
        res[0].children[1].children[1].children[3].children[0].content
      );
      console.log(
        "get token =>",
        res[0].children[1].children[1].children[3].children[0].content
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mx-auto h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-1/13">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-2xl bg-white border-0">
              <div className="flex-auto px-6 mx-4 lg:px-10 py-10 pt-0">
                <div className="flex justify-center pt-9">
                  <img
                    alt="..."
                    className="w-11"
                    src={"http://localhost:3005/assets/icons/logoDiarium.svg"}
                  />
                </div>
                <div className="text-green-50 text-center text-3xl pt-8 font-bold">
                  <span>Hello, Welcome Back!</span>
                </div>
                <div className="text-slate-400 text-center text-lg pt-2 font-normal">
                  <span>Let’s make your day more exciting here.</span>
                </div>
                <form className="mt-6" onSubmit={Login}>
                  {error && (
                    <div>
                      <h6>{error}</h6>
                    </div>
                  )}
                  <p className="text-center text-base text-gray-500"></p>
                  <div className="relative w-full mb-5">
                    <label
                      className="block text-grey-60 text-base font-semibold mb-2"
                      htmlFor="grid-password"
                    >
                      NIK*
                    </label>
                    <input
                      type="text"
                      name="username"
                      className="border-0 px-7 py-3 placeholder-slate-300 text-grey-70 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Enter NIK"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-5">
                    <label
                      className="block text-grey-60 text-base font-semibold mb-2"
                      htmlFor="grid-password"
                    >
                      Password*
                    </label>
                    <div className="flex flex-row w-full">
                      <div className="w-11/12 pr-2">
                        <input
                          type={passwordShown ? "text" : "password"}
                          className="border-0 px-7 py-3 placeholder-slate-300 text-grey-70 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          name="password"
                          placeholder="Enter 8 characters password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="grid justify-items-center items-center">
                        <a className="cursor-pointer" onClick={togglePassword}>
                          <span className="text-xs font-semibold">Show</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full mb-5">
                    <label
                      className="block text-grey-60 text-base font-semibold mb-2"
                      htmlFor="grid-password"
                    >
                      Captcha*
                    </label>
                    <div className="flex flex-row w-full">
                      <ReCAPTCHA
                        sitekey={CONFIG.captchaSiteKey}
                        onChange={onCheckCaptcha}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        onClick={() => {
                          setAgree(!agree);
                        }}
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-slate-700 ml-5 w-4 h-4 ease-linear transition-all duration-150 cursor-pointer"
                      />
                      <span className="ml-4 text-sm font-normal text-grey-60">
                        I agree to{" "}
                        <span className="text-red-500">terms & conditions</span>
                      </span>
                    </label>
                  </div>

                  <div className="btn-wrapper text-center mt-6">
                    <button
                      className="bg-green-50 max-h-14 text-white active:bg-slate-600 text-lg font-bold px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      disabled={!agree}
                    >
                      <div className="grid justify-items-center">
                        <div className="flex flex-row">
                          <div className="flex flex-col">
                            <img
                              alt="..."
                              className="w-6 mr-2"
                              src={
                                "http://localhost:3005/assets/icons/login.svg"
                              }
                            />
                          </div>
                          <div className="flex flex-col">
                            <span>Login</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </form>
                <div className="flex justify-end mt-5">
                  <label className="inline-flex cursor-pointer">
                    <span className="text-sm font-semibold text-green-50">
                      Forgot password ?
                    </span>
                  </label>
                </div>
                <div className="flex justify-center mt-5">
                  <div className="flex flex-row">
                    <div className="flex flex-col">
                      <img
                        alt="..."
                        className="w-56 pt-2"
                        src={"http://localhost:3005/assets/icons/line.svg"}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="px-6 text-base font-semibold text-grey-60">
                        Or
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <img
                        alt="..."
                        className="w-56 pt-2"
                        src={"http://localhost:3005/assets/icons/line.svg"}
                      />
                    </div>
                  </div>
                </div>
                <div className="btn-wrapper text-center mt-5">
                  <Link to={"/auth/login-qr"}>
                    <button
                      className="bg-white max-h-14 text-black active:bg-slate-600 text-sm font-normal px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      <div className="grid justify-items-center">
                        <div className="flex flex-row">
                          <div className="flex flex-col">
                            <img
                              alt="..."
                              className="w-6 mr-4"
                              src={
                                "http://localhost:3005/assets/icons/qr-small.svg"
                              }
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="pt-1 text-grey-60">
                              QR Code Scan
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
