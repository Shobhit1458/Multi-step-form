import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
import { Stepper, Step } from "react-form-stepper";

const StepThree = () => {
  const { setStep, userData, setUserData, currentStep } =
    useContext(multiStepContext);
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
                className="w-full"
                activeStep={currentStep - 1}
                orientation="horizontal"
              >
                <Step onClick={() => setStep(1)}></Step>
                <Step onClick={() => setStep(2)}></Step>
                <Step onClick={() => setStep(3)}></Step>
                <Step onClick={() => setStep(4)}>4</Step>
              </Stepper>
              {/* <h3 class="pt-4 mb-2 text-2xl">Forgot Your Password?</h3> */}
              {/* <p class="mb-4 text-sm text-gray-700">
                We get it, stuff happens. Just enter your email address below
                and we'll send you a link to reset your password!
              </p> */}
               <div className="block w-full bg-red-500 rounded-3xl font-semibold text-lg text-white ">
                <div className="relative px-8 py-8">
                  Preferences/Requirements
                </div>
              </div>
            </div>
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="requirements"
                >
                  Requirements
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Requirements..."
                  value={userData["requirements"]}
                  onChange={(e) =>
                    setUserData({ ...userData, requirements: e.target.value })
                  }
                />
              </div>
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="requirements"
                >
                  Gender Preference
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="checkbox1"
                  value="Male"
                />
                <label
                  className=" mb-2 text-sm font-bold text-gray-700"
                  for="gender1"
                >
                  {" "}
                  Male
                </label>
                <br />
                <input
                  type="radio"
                  name="gender"
                  id="checkbox2"
                  value="Female"
                />
                <label
                  className=" mb-2 text-sm font-bold text-gray-700"
                  for="gender2"
                >
                  {" "}
                  Female
                </label>
                <br />
                <input
                  type="radio"
                  name="gender"
                  id="checkbox2"
                  value="Other"
                />
                <label
                  className=" mb-2 text-sm font-bold text-gray-700"
                  for="gender2"
                >
                  {" "}
                  Other
                </label>
                {/* <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="gender1"
                  type="checkbox"
                  placeholder="Requirements..."
                  value={userData["requirements"]}
                  onChange={(e) =>
                    setUserData({ ...userData, requirements: e.target.value })
                  }
                /> */}
              </div>

              <div class="mb-6 text-center flex ">
                <button
                  class="w-1/2 px-4 py-2 font-bold text-white bg-red-500 rounded-l-xl hover:bg-red-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => setStep(4)}
                >
                  Next
                </button>
                <button
                  class="w-1/2 px-4 py-2 font-bold text-white bg-slate-300 rounded-r-xl hover:bg-slate-500 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => setStep(2)}
                >
                  Back
                </button>
              </div>
              {/* <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={submitData}
                >
                  Submit
                </button>
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => setStep(2)}
                >
                  Back
                </button>
              </div> */}
              <hr class="mb-6 border-t" />
              <div class="text-center">
               (*) Required fields
              </div>
              {/* <div class="text-center">
                <a
                  class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="./index.html"
                >
                  Already have an account? Login!
                </a>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
