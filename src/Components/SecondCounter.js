import { useState, useEffect } from "react";

function SecondCounter() {

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log("second")
        },1000);
        return () => {
            clearInterval(intervalID);
        }
    }, []);
}

export default SecondCounter;