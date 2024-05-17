function removeTodo(event) {
    event.target.parentNode.remove();
}

function addTodo(event) {
    event.preventDefault();
    const item = document.createElement("li");
    item.innerText = document.querySelector("#item").value;
    
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", removeTodo);
    item.appendChild(button);

    const list = document.querySelector("ul");
    list.appendChild(item);
}

document.querySelector("form").addEventListener("submit", addTodo);