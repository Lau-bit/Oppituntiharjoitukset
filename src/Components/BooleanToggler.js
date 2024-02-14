import { useState } from "react";

function BooleanToggler() {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <>
        <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
        {isToggled && 
        <>
        <p>Toggled is true</p>
        </>
        }
        </>
    )
}

export default BooleanToggler;