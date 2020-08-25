import React, { Component } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-buttons/cuustomButtons";
import "./signUp.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class signUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title"> I do not have account</h2>
        <span class=""> sign-up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="Display name"
            onChange={this.handleChange}
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            label="email"
            onChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            onChange={this.handleChange}
            required
          />

          <CustomButton type="submit"> Sign-Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default signUp;
