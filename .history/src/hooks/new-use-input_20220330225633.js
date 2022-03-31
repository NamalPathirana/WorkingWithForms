import { useState } from "react";

const useInput = (validateValue) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(inputValue);
  const hasError = !valueIsValid && isTouched;

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onBlurHandler = (event) => {
    setIsTouched(event.target.value);
  };

  const resetHandler = (event) => {
      setInputValue("");
      setIsTouched(false);
  }

  return {
      value:inputValue,
      valueIsValid,
      hasError,
      onChangeHandler,
      onBlurHandler,
      resetHandler
  }
};

export default useInput;
