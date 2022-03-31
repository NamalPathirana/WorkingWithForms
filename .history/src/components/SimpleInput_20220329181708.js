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

    if(enteredName.trim() === '') {
      setEnteredName(false);
      return;
    } // disregard empty entries.

    console.log(nameInputRef.current.value);
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" onChange={nameInputChangeHandler} />
        <p className="error-text">Name cannot be empty...</p>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
