import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className="text-white flex flex-col justify-center ...">
      <p className={isDanger ? "text-red-500" : "text-white"}>{value}</p>
      <span className="text-lg text-center">{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
