import { useState, useRef } from "react";

const SimpleInput = (props) => {
  // const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    } // disregard empty entries.

    setEnteredNameIsValid(true);
    console.log(enteredName);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
    if(event.target.value.trim() === ""){
      setEnteredNameIsValid(false);
      return;
    }
  }

  const enteredNameIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClass = `form-control ${enteredNameIsInvalid && "invalid"}`;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {enteredNameIsInvalid && (
          <p className="error-text">Name cannot be empty...</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
