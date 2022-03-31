import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid,setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if(enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    } // disregard empty entries.

    setEnteredNameIsValid(true);

    console.log(nameInputRef.current.value);
  }

  const formControl = `form-control ${!enteredNameIsValid && 'invalid'}`;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formControl}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" onChange={nameInputChangeHandler} />
        {!enteredNameIsValid && <p className="error-text">Name cannot be empty...</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
