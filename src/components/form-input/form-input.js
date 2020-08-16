import React from "react";
import "./form-input.scss";
const FormInput = ({ handleChange, label, ...othersProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...othersProps} />
      {label ? (
        <label
          className={`${
            othersProps.value.length ? "shrink " : ""
          }form-input-label`}
        ></label>
      ) : null}
    </div>
  );
};

export default FormInput;
