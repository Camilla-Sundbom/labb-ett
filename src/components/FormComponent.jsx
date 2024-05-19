import { useState } from "react";
import PropTypes from "prop-types";

function FormComponent({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

FormComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormComponent;
