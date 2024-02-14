import zebra from "../Images/zebra.jpg"

function Component1(){ // Create a function, you can also use arrow functions
    console.log("test") // JS works normally here
    return( // This round bracket ( is required if the return content is multiline
        <div className="bodyDiv">
        <h1 className="header">Example</h1>
        <p>Sentence 1</p>
        <input></input>
        <p>Test sentence</p>
        <img src={zebra} alt="a zebra" width="400px"></img>
        {/*You can write any HTML in this section*/}
        </div>
    )
}

export default Component1 // Export default ComponentName. 