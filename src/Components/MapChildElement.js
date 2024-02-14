function MapChildElement(props){
    return (
        <>
        <p>This is MapChildElement</p>
        <p>This is the arr as a "p" element {props.arr}</p>
        <ul>
            {
                props.arr.map((item, index) => {
                    return(
                    <li key={index}>{item}</li>
                    )
                })
            }
        </ul>
        </>
    )
}

export default MapChildElement;