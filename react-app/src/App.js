import { useState, useEffect } from "react";

function Hello() {
    // function byeFnct = () => {
    //     console.log("destroyed :(");
    // }
    // function hiFnct = () => {
    //     console.log("Created :)");
    //     return byeFnct;
    // }
    // useEffect(hiFnct,[]);
    useEffect(() => {
        console.log("Created :)");
        return () => {
            console.log("Destroyed :(");
        }; //component가 사라질때 동작하는 cleanup funtion.
    }, []);

    return <h1>Hello</h1>;
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            <button onClick={onClick}>{!showing ? "Show" : "Hide"}</button>
            {showing ? <Hello></Hello> : null}
        </div>
    );
}

export default App;
