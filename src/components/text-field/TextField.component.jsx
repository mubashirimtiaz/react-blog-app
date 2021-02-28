import React from "react";

const TextField = ({ type, name, value, handleChange }) => {
  return (
    <input type={type} name={name} value={value} onChange={handleChange} />
  );
};

export default TextField;
