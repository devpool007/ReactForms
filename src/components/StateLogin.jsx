import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation"; 
export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
  //can outsource validation to external functions like in util folder
  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length < 6;

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevState) => {
      return {
        ...prevState,
        [identifier]: value,
      };
    });
    setDidEdit((prevState) => {
      return {
        ...prevState,
        [identifier]: false,
      };
    });
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevState) => {
      return {
        ...prevState,
        [identifier]: true,
      };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(Event) => handleInputChange("email", Event.target.value)}
          value={enteredValues.email}
          error={emailIsInvalid && "Please enter a valid email address"}
        />

        <Input 
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(Event) =>
            handleInputChange("password", Event.target.value)
          }
          value={enteredValues.password}
          error={passwordIsInvalid && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>
          Login
        </button>
      </p>
    </form>
  );
}
