import useInput from "../hooks/new-use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: enteredNameIsNotValid,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurHandler,
    resetHandler: resetNameInput,
  } = useInput((enteredName) => {
    return enteredName.trim() !== "";
  });

  const {
    value: enteredLastName,
    valueIsValid: enteredLastNameIsValid,
    hasError: enteredLastNameIsNotValid,
    onChangeHandler: lastNameChangeHandler,
    onBlurHandler: lastNameBlurHandler,
    resetHandler: resetLastNameInput,
  } = useInput((enteredName) => {
    return enteredName.trim() !== "";
  });

  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: enteredEmailIsNotValid,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    resetHandler: resetEmailInput,
  } = useInput((userEntry) => {
    return userEntry.trim() !== "" && userEntry.trim().includes("@");
  });

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredLastNameIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameInputClassStyle = `form-control ${
    enteredNameIsNotValid && "invalid"
  }`;
  
  const lastNameInputClassStyle = `form-control ${
    enteredLastNameIsNotValid && "invalid"
  }`;

  const emailInputClassStyle = `form-control ${
    enteredEmailIsNotValid && "invalid"
  }`;

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClassStyle}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {enteredNameIsNotValid && (
            <p className="error-text">Name cannot be empty.</p>
          )}
        </div>
        <div className="form-control ">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
          {enteredNameIsNotValid && (
            <p className="error-text">Name cannot be empty.</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
