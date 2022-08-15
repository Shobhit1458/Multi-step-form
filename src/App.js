import "./index.css";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import { Stepper, Step } from "react-form-stepper";
import { multiStepContext } from "./StepContext";
import { useContext } from "react";
import DisplayData from "./components/DisplayData";
function App() {
  const { currentStep } = useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <DisplayData />;
      default:
        return <StepOne />;
    }
  }

  return (
    <div>
      <div className="center-stepper">
        <div className="hidden  justify-center ">
          <Stepper
            className="w-1/4"
            activeStep={currentStep - 1}
            orientation="horizontal"
          >
            <Step></Step>
            <Step></Step>
            <Step></Step>
            <Step>4</Step>
          </Stepper>
        </div>
      </div>
      {showStep(currentStep)}
    </div>
  );
}

export default App;
