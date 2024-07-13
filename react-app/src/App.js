import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.scss";

function App() {
    const [counter, setValue] = useState(0);
    const onClick = () => setValue((prev) => prev + 1);
    console.log("I run all the time");
    useEffect(() => {
        // useEffect는 react.js에 내장된 함수로. 특정 함수를 최초 한번만 호출해야할 때 사용함.
        console.log("I run only once.");
    }, []);
    return (
        <div>
            <h1 className={styles.title}>{counter}</h1>
            <Button text={"click me"} onClick={onClick} />
        </div>
    );
}

export default App;
