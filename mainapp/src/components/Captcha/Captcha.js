import React, { useState } from 'react';

function Captcha() {

    const [user, setUser] = useState({
        captch: ""
    });

    const characters = 'abc123';

    function generateString(length) {
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const captcha = generateString(6)

    let handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        user[name] = value;
        setUser(user);
    }

    const onSubmit = e => {

        var element = document.getElementById("succesBTN");
        var inputData = document.getElementById("inputType");
        inputData.disabled = true;
        element.disabled = true;

        var myFunctions = function () {
            if (captcha === user.captch) {
                element.innerHTML = "Captcha Verified";
                element.disabled = true;

            }
            else {
                element.style.cursor = "not-allowed";
                element.innerHTML = "Not Matched";
                element.disabled = true;

                var myFunction = function () {
                    element.style.backgroundColor = "#007bff";
                    element.style.cursor = "pointer";
                    element.innerHTML = "Verify Captcha";
                    element.disabled = false;
                    inputData.disabled = false;
                    inputData.value = '';
                };
                setTimeout(myFunction, 1000);
            }
        }
        setTimeout(myFunctions, 1000);
    };

    return (
        <div className="container">
            <label
                className="block text-grey-60 text-base font-semibold mb-2"
                htmlFor="grid-password"
            >
                Captcha*
            </label>
            <div className="flex flex-row w-full">
                <div className="flex flex-col w-1/2 pr-2">
                    <input
                        onChange={handleChange}
                        type="captcha"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-grey-70 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                </div>
                <div className="flex flex-col w-1/2 pl-2">
                    <div className="border-0 px-3 py-3 placeholder-slate-300 text-grey-70 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                        Captcha : <span className='font-bold text-black'>{captcha}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Captcha;

