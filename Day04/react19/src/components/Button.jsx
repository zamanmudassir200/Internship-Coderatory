import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-400 p-3 rounded-full text-white "
    >
      {text}
    </button>
  );
};

export default Button;
