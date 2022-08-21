import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
import { Stepper, Step } from "react-form-stepper";


const StepTwo = () => {
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

              <div className="block w-full bg-red-500 rounded-3xl text-lg font-semibold text-white ">
                <div className="relative px-8 py-8">
                  Share your house details
                </div>
              </div>

            </div>
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="expectedRent"
                >
                  Expected Rent *
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-black bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="expectedRent"
                  type="number"
                   placeholder="Enter Expected rent..."
                   value={userData["expectedRent"]}
                   onChange={(e) =>
                     setUserData({ ...userData, expectedRent: e.target.value })
                   }
                />
                {/* <input
                  id="large-range"
                  type="range"
                  // value="50"
                  class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-200"
                ></input> */}
                {/* <Slider
                  min={0}
                  max={100}
                  value={10}
                  onChangeStart={this.handleChangeStart}
                  onChange={this.handleChange}
                  onChangeComplete={this.handleChangeComplete}
                /> */}
              </div>
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="pinCode"
                >
                  Full Address *
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="fullAddress"
                  type="text"
                  placeholder="Enter Full Address..."
                  value={userData["fullAddress"]}
                  onChange={(e) =>
                    setUserData({ ...userData, fullAddress: e.target.value })
                  }
                />
              </div>
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="pinCode"
                >
                  Pin Code *
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="pinCode"
                  type="number"
                  placeholder="Enter Pincode..."
                  value={userData["pinCode"]}
                  onChange={(e) =>
                    setUserData({ ...userData, pinCode: e.target.value })
                  }
                />
              </div>
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="pinCode"
                >
                  Select Nearby College *
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="nearbyCollege"
                  type="text"
                  placeholder="Enter the Nearby College..."
                  value={userData["nearbyCollege"]}
                  onChange={(e) =>
                    setUserData({ ...userData, nearbyCollege: e.target.value })
                  }
                />
              </div>

              <div class="mb-6 text-center flex ">
                <button
                  class="w-1/2 px-4 py-2 font-bold text-white bg-red-500 rounded-l-xl hover:bg-red-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => setStep(3)}
                >
                  Next
                </button>
                <button
                  class="w-1/2 px-4 py-2 font-bold text-white bg-slate-300 rounded-r-xl hover:bg-slate-500 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
              </div>
              <hr class="mb-6 border-t" />
              <div class="text-center">(*) Required fields</div>
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

export default StepTwo;
