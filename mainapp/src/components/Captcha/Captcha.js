import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

export default function Captcha() {
    const allValue = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const [value, setValue] = useState("");
    const [name, setName] = useState("");

    const dispatch = useDispatch();
    const isValidCaptcha = useSelector((state) => state.isValidCaptcha);

    function handleChange(event) {
        setName(event.target.value)
    }

    function generateCaptcha() {
        var cVal1 = allValue[Math.floor(Math.random() * allValue.length)];
        var cVal2 = allValue[Math.floor(Math.random() * allValue.length)];
        var cVal3 = allValue[Math.floor(Math.random() * allValue.length)];
        var cVal4 = allValue[Math.floor(Math.random() * allValue.length)];
        var cVal5 = allValue[Math.floor(Math.random() * allValue.length)];
        var cVal6 = allValue[Math.floor(Math.random() * allValue.length)];
        var cValue = cVal1 + cVal2 + cVal3 + cVal4 + cVal5 + cVal6;
        setValue(cValue)
    }

    function validate() {
        if (name === value) {
            console.log("valid")
            // true
            return (
                dispatch({ type: "set", isValidCaptcha: !isValidCaptcha })
            )

        } else if (name != value) {
            console.log("invalid")
            // false
            return (
                dispatch({ type: "set", isValidCaptcha: false })
            )
        }
    }

    useEffect(() => {
        validate()
    }, [name])


    useEffect(() => {
        generateCaptcha()
    }, [1])



    return (
        <>
            <label
                className="block text-grey-60 text-base font-semibold mb-2"
                htmlFor="grid-password"
            >
                Captcha*
            </label>
            <div className="flex flex-row w-full">
                <div className="flex flex-col w-1/2 pr-2" onmousedown="return false" onselectstart="return false">
                    <input
                        onChange={handleChange}
                        onPaste={(e) => {
                            e.preventDefault()
                            return false;
                        }}
                        type="captcha"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-grey-70 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                </div>
                <div className="flex flex-col w-1/2 pl-2">
                    <div className="border-0 px-3 py-3 placeholder-slate-300 text-grey-70 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                        Captcha :
                        <span onCopy={(e) => {
                            e.preventDefault()
                            return false;
                        }} className='font-bold text-black'>{value}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );

}
