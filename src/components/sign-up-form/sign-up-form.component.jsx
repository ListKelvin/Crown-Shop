import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
  creatAuthUserWithEmailAndPassword,
  creatUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";
const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formField, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formField;

  const resetFormField = () => {
    setFormFields(defaultFormField);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Your password do not match");
      return;
    }

    try {
      const { user } = await creatAuthUserWithEmailAndPassword(email, password);

      await creatUserDocumentFromAuth(user, { displayName });

      resetFormField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formField,
      [name]: value,
    });
  };
  return (
    <div className="sign-up-container">
      <h2>Dont'have an account </h2>
      <span> signUp here</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="Submit" children="Sign Up" />
      </form>
    </div>
  );
};

export default SignUpForm;
