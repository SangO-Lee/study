import { useState, useEffect } from "react";

function App() {
    const [toDo, setTodo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => {
        setTodo(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(toDo);
        if (toDo === "") {
            return;
        }
        setToDos((currentArray) => [toDo, ...currentArray]);
        // ...뒤에 배열을 붙이면 배열을 구성하는 요소를 풀어서 하나의 배열로 합칠 수 있다.
        setTodo("");
    };
    console.log(toDos);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>My Todos ({toDos.length})</h1>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do..."
                ></input>
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {/* .map()은 배열에 있는 요소의 갯수 만큼 반복 실행하고, 새로운 배열을 생성해줌
                toDos.map((item) => item.toUpperCase())
                위의 예시는 기존 배열의 요소를 그대로 다시 집어넣으면서 toUpperCase 처리를 해주는 형태
            */}
        </div>
    );
}

export default App;
