import { useState } from "react";

const useInput = (validationFunc) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validationFunc;
  



};
