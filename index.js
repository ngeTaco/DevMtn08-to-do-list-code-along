function completeTodo(event) {
    const value = event.target.getAttribute("aria-checked");
    const message = document.querySelector("aside");
    if (value !== 'true') {
        event.target.setAttribute("aria-checked", "true");
        message.style.visibility = "visible";
        setTimeout(() => {
            message.removeAttribute("style");
        }, 2000);
    } else {
        event.target.setAttribute("aria-checked", "false");
    }
};

function removeTodo(event) {
    event.stopPropagation();
    event.target.parentNode.remove();
}//event stoppropagation

function addTodo(event) {
    event.preventDefault();
    const item = document.createElement("li");
    item.innerText = document.querySelector("#item").value;
    item.addEventListener("click", completeTodo);
    
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", removeTodo);
    item.appendChild(button);

    const list = document.querySelector("ul");
    list.appendChild(item);
}

document.querySelector("form").addEventListener("submit", addTodo);