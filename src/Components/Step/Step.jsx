/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../Button/Button";

const steps = ["Learn React. 🏫", "Build Projects. ⚒", "Get Hired. 💼"];

const Step = ({ step, handlePrevious, handleNext }) => {
  return (
    <div className="md:w-1/2 w-11/12 md:h-1/2 h-2/5 bg-slate-100">
      <div className="md:w-1/2 w-9/12 my-10 mx-auto flex justify-around items-center">
        <p
          className={`md:w-16 w-14 md:h-16 h-14 md:text-xl text-md font-bold rounded-full flex items-center justify-center bg-slate-200 ${
            step >= 1 ? "bg-purple-500 text-white" : ""
          }`}
        >
          1
        </p>
        <p
          className={`md:w-16 w-14 md:h-16 h-14 md:text-xl text-md font-bold rounded-full flex items-center justify-center bg-slate-200 ${
            step >= 2 ? "bg-purple-500 text-white" : ""
          }`}
        >
          2
        </p>
        <p
          className={`md:w-16 w-14 md:h-16 h-14 md:text-xl text-md font-bold rounded-full flex items-center justify-center bg-slate-200 ${
            step >= 3 ? "bg-purple-500 text-white" : ""
          }`}
        >
          3
        </p>
      </div>
      <div className="w-9/12 my-20 mx-auto flex justify-center items-center">
        <h1 className="md:text-3xl text-xl font-bold">
          Step {step}: {steps[step - 1]}
        </h1>
      </div>
      <div className="w-1/2 my-20 mx-auto flex justify-between items-center">
        {/* <button
      className="md:text-xl text-md bg-purple-500 text-white px-4  py-2 rounded-full"
      onClick={handlePrevious}
    >
      Previous
    </button>
    <button
      className="md:text-xl text-md bg-purple-500 text-white px-4  py-2 rounded-full"
      onClick={handleNext}
    >
      Next
    </button> */}
        <Button handleOnClick={handlePrevious}>
          <span>👈</span>Previous
        </Button>
        <Button handleOnClick={handleNext}>
          Next<span>👉</span>
        </Button>
      </div>
    </div>
  );
};

export default Step;
