import { async } from "@firebase/util";
import { SpanRecorder } from "@sentry/tracing/dist/span";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { postLoginAuth, getJsonWebToken } from "../../api";
import jwt_decode from "jwt-decode";
import Captcha from "../../components/Captcha/Captcha";

export default function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();

  // const getToken = async (e) => {
  //   try {
  //     getJsonWebToken();
  //     setToken(response.data.accessToken);
  //     const decode = jwt_decode(response.data.accessToken);
  //     console.log(decode);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const Login = async (e) => {
    e.preventDefault();
    try {
      postLoginAuth({
        username: username,
        password: password,
      });
      history.push("/admin");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  // useEffect(() => {
  //   getToken();
  // }, []);

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
                    <Captcha />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-slate-700 ml-1 w-4 h-4 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-normal text-grey-60">
                        I agree to{" "}
                        <span className="text-red-500">terms & conditions</span>
                      </span>
                    </label>
                  </div>

                  <div className="btn-wrapper text-center mt-6">
                    <button
                      className="bg-green-50 max-h-14 text-white active:bg-slate-600 text-lg font-bold px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
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
