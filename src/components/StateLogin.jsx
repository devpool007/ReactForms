import { useState } from "react";
export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");

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

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(Event) => handleInputChange("email", Event.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">{
            emailIsInvalid && <p>pleasse enter correct stuff man!</p> }</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password" 
            name="password"
            onChange={(Event) => handleInputChange("password", Event.target.value)}
            value={enteredValues.password}
          />
        </div>
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
