const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");

    li.appendChild(span);
    span.innerText = newTodo;
    todoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();

    const newTodo = todoInput.value;

    todoInput.value = "";
    paintTodo(newTodo);
}

todoForm.addEventListener('submit',handleTodoSubmit);