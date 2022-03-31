import { useState } from "react";

const useInput = (validateValue) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(inputValue);
  const hasError = !valueIsValid && isTouched;

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const resetHandler = () => {
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
