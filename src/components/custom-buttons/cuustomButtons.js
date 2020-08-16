import React from "react";

import "./custombutton.scss";

const customButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-signin" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default customButton;
