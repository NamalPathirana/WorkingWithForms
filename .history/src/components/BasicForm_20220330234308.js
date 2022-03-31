import useInput from "../hooks/new-use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: enteredNameIsNotValid,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurHandler,
    resetHandler: resetNameInput,
  } = useInput((enteredName)=>{
    return enteredName !== "";
  });


  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  const nameInputClassStyle = `form-control ${enteredNameIsNotValid && 'invalid'}`

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClassStyle}>
          <label htmlFor="name">First Name</label>
          <input type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          />
          {enteredNameIsNotValid && <p className="error-text">Name cannot be empty.</p>}
        </div>
        <div className="form-control ">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
