import { useState } from "react";

function TextLengthCounter() {
    const [textLength, setTextLength] = useState(0);

    function handleChange(e){
        setTextLength(prevState => e.target.value.length);
    }

    return (
        <>
        <input onChange={handleChange}></input>
        <p>{textLength}</p>
        </>
    )
}

export default TextLengthCounter;