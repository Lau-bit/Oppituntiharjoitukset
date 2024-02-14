import { useRef } from "react";

function UncontrolledForm() {
    const inputRef = useRef();

    const handleSubmit = (event) => {
        alert("A name was submitted: " + inputRef.current.value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" ref={inputRef} />
            </label>
            <button type="submit">Click to submit</button>
        </form>
    );
}

export default UncontrolledForm;