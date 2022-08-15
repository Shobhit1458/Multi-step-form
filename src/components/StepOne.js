import React, { useContext, useState } from "react";
import { multiStepContext } from "../StepContext";
import { Stepper, Step } from "react-form-stepper";

import { auth } from "../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const StepOne = () => {
  const { setStep, userData, setUserData, currentStep } =
    useContext(multiStepContext);

  const [expand, setExpand] = useState(false);
  const [otp, setOtp] = useState("");

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  const otpVerification = (e) => {
    e.preventDefault();
    if (userData.phoneNumber.length === 13) {
      console.log("hello");
      setExpand(true);
      generateRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, userData.phoneNumber, appVerifier)
        // console.log(userData.phoneNumber)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          alert("ni hora kuch");
        });
    }
    else 
    alert("INVALID NUMBER")
  };

  const verifyOtp = (e) => {
    let otp = e.target.value;
    setOtp(otp);

    if (otp.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          alert("Verified")
          setExpand(false)
        })
        .catch((error) => {
           alert("bad verification code")
          // ...
        });
    }
  };

  const phoneCheck = (e) => {
    // setUserData({ ...userData, phoneNumber: e.target.value });
    console.log("helkn")
    return (
      <button
        type="button"
        onClick={otpVerification}
        className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
      >
        Request OTP
      </button>
    );
  };
  return (
    <div class="container mx-auto">
      <div class="flex justify-center px-6 my-12">
        <div class="w-full xl:w-3/4 lg:w-11/12 flex">
          <div
            class="w-full h-screen bg-black hidden lg:block lg:w-1/2 rounded-l-lg bg-[url('https://media.istockphoto.com/photos/realty-home-picture-id171341566?k=20&m=171341566&s=612x612&w=0&h=PG1yiNI_sfpMp1czGa7PJXeTZzM-t5cdmaMXTNklXg8=')] bg-cover bg-no-repeat"
            // style="background-image: url('https://source.unsplash.com/oWTW-jNGl9I/600x800')"
          ></div>
          <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <div class="px-8 mb-4 text-center">
              <Stepper
                className="hidden w-full"
                activeStep={currentStep - 1}
                orientation="horizontal"
              >
                <Step onClick={() => setStep(1)}></Step>
                <Step onClick={() => setStep(2)}></Step>
                <Step onClick={() => setStep(3)}></Step>
                <Step onClick={() => setStep(4)}>4</Step>
              </Stepper>
              {/* <h3 class="pt-4 mb-2 text-2xl bg-red-500">Enter your Personal Details</h3> */}
              <div className="block w-full bg-red-500 rounded-3xl text-lg font-semibold text-white ">
                <div className="relative px-8 py-8">
                  Enter your Personal Details
                </div>
              </div>
              {/* <p class="mb-4 text-sm text-gray-700">
                We get it, stuff happens. Just enter your email address below
                and we'll send you a link to reset your password!
              </p> */}
            </div>
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="fullName"
                >
                  Enter Full Name *
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="fullName"
                  type="text"
                  placeholder="Enter Full Name..."
                  value={userData["fullName"]}
                  onChange={(e) => 
                    setUserData({ ...userData, fullName: e.target.value })
                  }
                  required
                />
              </div>
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="phoneNumber"
                >
                  Phone number *
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="phoneNumber"
                  type="tel"
                  placeholder="Enter Your Phone Number..."
                  value={userData["phoneNumber"]}
                  onChange={(e) => 
                    setUserData({ ...userData, phoneNumber: e.target.value })
                  }
                  // onClick={phoneCheck}
                />
              </div>
              {expand === true ? (
                <>
                  <div className="mb-4">
                    <label
                      htmlFor="otpInput"
                      className="block mb-2 text-sm font-bold text-gray-700"
                    >
                      OTP
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="otpInput"
                      value={otp}
                      onChange={verifyOtp}
                    />
                  </div>
                </>
              ) : null}

              {expand === false?
                <button type="button" onClick={otpVerification} className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline">Request OTP</button>
                :
                null
              }

              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="email"
                >
                  Alternate Phone Number
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="altphno"
                  type="email"
                  placeholder="Enter Email Address..."
                  value={userData["altphno"]}
                  onChange={(e) =>
                    setUserData({ ...userData, altphno: e.target.value })
                  }
                />
              </div>

              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="email"
                >
                  Email *
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter Email Address..."
                  value={userData["email"]}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </div>

              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => setStep(2)}
                >
                  Proceed
                </button>
              </div>
              <hr class="mb-6 border-t" />
              <div class="text-center">(*) Required fields</div>
            </form>
            <div id="recaptcha-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
