import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  // const nameInputRef = useRef();
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const {enteredName,enteredNameIsValid, enteredNameHasError, valueChangeHandler:nameValueChangeHandler, valueChangeHandler:nameValueBlurHandler} =
    useInput((valueEntered) => {return valueEntered.trim() !== ""});

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const enteredNameIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.includes("@");
  const enteredEmailIsNotValid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;
    console.log(enteredName);
    // setEnteredName("");
  };

  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameTouched(true);
  // };

  const nameInputClass = `form-control ${enteredNameHasError && "invalid"}`;

  const emailInputClass = `form-control ${enteredEmailIsNotValid && "invalid"}`;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameValueChangeHandler}
          onBlur={nameValueBlurHandler}
          value={enteredName}
        />
        {enteredNameHasError && (
          <p className="error-text">Name cannot be empty...</p>
        )}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailIsNotValid && (
          <p className="error-text"> email cannot be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
