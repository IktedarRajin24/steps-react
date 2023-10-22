/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Button = ({ children, handleOnClick }) => {
  return (
    <button
      className="md:text-xl text-md bg-purple-500 text-white px-4  py-2 rounded-full flex items-center"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
