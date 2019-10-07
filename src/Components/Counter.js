import React from "react";
import PropTypes from "prop-types";

const Counter = ({ value, onChange, step = 1 }) => {
  const handleChange = newValue => {
    onChange(newValue);
  };

  return (
    <div>
      <button onClick={e => handleChange(value - step)}>-</button>
      <span>{value}</span>
      <button onClick={e => handleChange(value + step)}>+</button>
    </div>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  step: PropTypes.number
};

export default Counter;
