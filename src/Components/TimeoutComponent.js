import { useState, useEffect } from "react";

function TimeoutComponent(){
    const [text, setText] = useState("Waiting...")
    useEffect(() => {
        setTimeout(() => {
            setText("Completed!");
        }, 5000)
    })

    return (
        <>
        <p>{text}</p>
        
        </>
    )


}

export default TimeoutComponent;