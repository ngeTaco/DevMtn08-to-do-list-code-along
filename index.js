function addTodo(event) {
    event.preventDefault();
    const item = document.createElement("li");
    item.innerText = document.querySelector("#item").value;

    const list = document.querySelector("ul");
    list.appendChild(item);
}

document.querySelector("form").addEventListener("submit", addTodo);