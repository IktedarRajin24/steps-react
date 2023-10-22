/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "../Button/Button";
import Step from "../Step/Step";

const Steps = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  };
  const handleNext = () => {
    if (step < 3) {
      setStep((step) => step + 1);
    }
  };

  const handleSetOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <button
        className="md:text-3xl text-xl font-bold absolute top-10 right-10"
        onClick={handleSetOpen}
      >
        X
      </button>
      {isOpen && (
        <Step
          step={step}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        ></Step>
      )}
    </>
  );
};

export default Steps;
