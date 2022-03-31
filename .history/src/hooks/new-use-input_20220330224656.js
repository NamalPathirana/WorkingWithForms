import { useState } from "react";


const useInput = () => {

    const [inputValue,setInputValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    

    const onChangeHandler = event => {
        setInputValue(event.target.value);
    }

    const onBlurHandler = event => {
        setIsTouched(event.target.value);
    }




};

export default useInput;
