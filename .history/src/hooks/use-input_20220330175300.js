import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  return {
    value: enteredValue,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
  };
};
