import { SpanRecorder } from "@sentry/tracing/dist/span";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <div className="container mx-auto h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-1/13">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-2xl bg-white border-0">
                            <div className="absolute pt-9 pl-10">
                                <Link to={'/auth/login'}>
                                    <img
                                        alt="..."
                                        className="w-8"
                                        src={"http://localhost:3005/assets/icons/back-green.svg"}
                                    />
                                </Link>
                            </div>
                            <div className="flex-auto px-6 mx-4 lg:px-10 py-10 pt-2">
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
                                <div className="flex justify-center pt-20">
                                    <img
                                        alt="..."
                                        className="h-48"
                                        src={"http://localhost:3005/assets/icons/qr-big.svg"}
                                    />
                                </div>
                                <div className="flex justify-center pt-20">
                                    <span className="text-grey-80 font-bold text-lg">
                                        Use <span className="text-red-500">DIARIUM</span> mobile app
                                    </span>
                                </div>
                                <div className="flex justify-center pb-9">
                                    <span className="text-grey-80 font-bold text-lg">
                                        to scan QR Code and login
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
