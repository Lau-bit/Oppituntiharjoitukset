import { useState, useEffect } from "react";

function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        console.log(isOpen? "Modal opened" : "Modal closed");
    }, [isOpen]);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Close" : "Open"} Modal
            </button>
            {isOpen && (
                <div style={{border: "2px solid black", padding: "10px", marginTop: "10px", width: "100px"}}>
                <p>This is a modal</p>
                <button onClick={() => setIsOpen(false)}>Close</button>
              </div>
            )}
      </div>
    );
}

export default Modal;