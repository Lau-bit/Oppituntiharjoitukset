import { useRef } from "react";

function FocusInputComponent() {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>Focus input</button>
        </>
    )
}

export default FocusInputComponent;