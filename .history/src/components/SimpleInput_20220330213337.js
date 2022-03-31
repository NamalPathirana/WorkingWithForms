import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  // const nameInputRef = useRef();

  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
  } = useInput((valueEntered) => {
    return valueEntered.trim() !== "";
  });

  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: enteredEmailIsNotValid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
  } = useInput((valueEntered) => {
    return valueEntered.trim() !== "" && valueEntered.includes("@");
  });

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  
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
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
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
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
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
