import { onValue, ref } from "firebase/database";
import React, { useState , useEffect } from "react";
import {database} from './firebase'
import App from "./App";

export const multiStepContext = React.createContext();
const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  // function submitData() {
  //     setUserData('')
  //     setStep(4);
  // }

  // useEffect(() => {
  //   onValue(ref(database),(snapshot) => {
  //     const data= snapshot.val();
  //     if(data!==null){
  //       Object.values(data).map((userData)=> {
  //         setFinalData((oldArray) => [...oldArray,userData])
  //       });
  //     }
  //   });
  // }, []);


  const confirmData = async (e) => {
    e.preventDefault();
    
    const {
      fullName,
      altphno,
      email,
      phoneNumber,
      fullAddress,
      pinCode,
      nearbyCollege,
      requirements,
    } = userData;

    const res = await fetch(
      "https://monkhoodform-default-rtdb.firebaseio.com/ownerDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          altphno,
          email,
          phoneNumber,
          fullAddress,
          pinCode,
          nearbyCollege,
          requirements,
        }),
      }
    );

    if (res) {
      alert("Data Stored");
    } else alert("Please fill the data");
    setFinalData((finalData) => [...finalData, userData]);
    setStep(1);
    setUserData("");
  };

  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          confirmData,
        }}
      >
        <App />
      </multiStepContext.Provider>
    </div>
  );
};
export default StepContext;
