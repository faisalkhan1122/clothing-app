import React from "react";
import "./signIn-signUp.scss";
import SignIn from "../../components/Sign-in/signIn";
import SignUp from "../../components/sign-up/signUp";

const SignInSignup = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignup;
