import useInput from "../hooks/new-use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: enteredNameIsNotValid,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurHandler,
    resetHandler: resetNameInput,
  } = useInput(()=>{});

  return (
    <form onSubmit={"#"}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          />
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
