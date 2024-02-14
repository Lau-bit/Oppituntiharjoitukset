import { useState } from "react";
import MapChildElement from "./MapChildElement";

function MapParentElement(){

    const [arr, setArr] = useState(["1", "2", "3"]);
    return (
        <>
        <MapChildElement arr={arr}></MapChildElement>
        </>
    )
}

export default MapParentElement;