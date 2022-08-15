import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
import { Stepper, Step } from "react-form-stepper";

const DisplayData = () => {
 
  const { setStep, userData, currentStep ,confirmData} =
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
                  Preview Your Inputs
                </div>
              </div>
            </div>
            
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full text-center">
                      {/* <thead class="border-b">
                        <tr>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4"
                          >
                            Class
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4"
                          >
                            Heading
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4"
                          >
                            Heading
                          </th>
                        </tr>
                      </thead> */}
                      <tbody>
                        <tr onClick={() => setStep(1)} class="border-b bg-red-500 border-gray-900 cursor-pointer">
                          <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                          Full Name: 
                          </td>
                          
                          <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {userData.fullName}
                          </td>
                        </tr>
                        <tr class="border-b bg-red-500 border-gray-900">
                          <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                          Phone Number: 
                          </td>
                          
                          <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {userData.phoneNumber}
                          </td>
                        </tr>
                        <tr class="border-b bg-red-500 border-gray-900">
                          <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                          Alternate Phone Number: 
                          </td>
                          
                          <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {userData.altphno}
                          </td>
                        </tr>
                        <tr class="border-b bg-red-500 border-gray-900">
                          <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                          E-Mail: 
                          </td>
                          
                          <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {userData.email}
                          </td>
                        </tr>
                        <tr class="border-b bg-red-500 border-gray-900">
                          <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                          Full Address: 
                          </td>
                          
                          <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {userData.fullAddress}
                          </td>
                        </tr>
                        <tr class="border-b bg-red-500 border-gray-900">
                          <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                          Expected Rent: 
                          </td>
                          
                          <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {userData.expectedRent}
                          </td>
                        </tr>
                        <tr class="border-b bg-red-500 border-gray-900">
                          <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                          Pin-code: 
                          </td>
                          
                          <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {userData.pinCode}
                          </td>
                        </tr>
                        <tr class="border-b bg-red-500 border-gray-900">
                          <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                          Nearby College: 
                          </td>
                          
                          <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {userData.nearbyCollege}
                          </td>
                        </tr>
                        {/* <tr class="border-b bg-red-500 border-gray-900">
                          <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                          Full Name: 
                          </td>
                          
                          <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {userData.fullName}
                          </td>
                        </tr>
                        <tr class="border-b bg-red-500 border-gray-900">
                          <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                          Full Name: 
                          </td>
                          
                          <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {userData.fullName}
                          </td>
                        </tr>
                        <tr class="border-b bg-red-500 border-gray-900">
                          <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                          Full Name: 
                          </td>
                          
                          <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {userData.fullName}
                          </td>
                        </tr>
                        <tr class="border-b bg-red-500 border-gray-900">
                          <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                          Full Name: 
                          </td>
                          
                          <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {userData.fullName}
                          </td>
                        </tr> */}
                        {/* {finalData.map((data) => {
                          return <tr key={data.email} class="border-b bg-red-500 border-gray-900">
                          <td class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                           Full Name: 
                          </td>
                          <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                          {data.fullName}
                          </td>
                          </tr>
                        })} */}

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-6 text-center flex ">
                <button
                  class="w-1/2 px-4 py-2 font-bold text-white bg-red-500 rounded-l-xl hover:bg-red-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={confirmData}
                >
                  Submit
                </button>
                <button
                  class="w-1/2 px-4 py-2 font-bold text-white bg-slate-300 rounded-r-xl hover:bg-slate-500 focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={() => setStep(3)}
                >
                  Back
                </button>
              </div>
              <hr class="mb-6 border-t" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DisplayData;
