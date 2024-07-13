import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.scss";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => {
        setKeyword(event.target.value);
    };

    // console.log("I run all the time");
    useEffect(() => {
        // useEffect는 react.js에 내장된 함수로. 특정 함수를 최초 한번만 호출해야할 때 사용함.
        console.log("COUNTER CHANGES");
    }, [counter]);
    useEffect(() => {
        if (keyword !== "" && keyword.length > 5) {
            console.log("SEARCH FOR..", keyword);
        }
    }, [keyword]); // keyword가 변할때만 이 코드를 실행하라는 뜻
    // [] 안에는 실행 조건이 들어있음

    useEffect(() => {
        console.log("keyword and counter changes.");
    }, [keyword, counter]);
    //여러개의 변화를 동시에 감지하는 것도 가능하다.
    return (
        <div>
            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="Search here..."
            ></input>
            <h1 className={styles.title}>{counter}</h1>
            <Button text={"click me"} onClick={onClick} />
        </div>
    );
}

export default App;
