import { useState} from "react";

function ControlledForm() {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        alert("A name was submitted: " + value);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ControlledForm;