
const form = document.getElementById("task-creator");
const taskInputField = document.getElementById("task-input");
const todoList = document.getElementById("todo-list");

form.addEventListener("submit", function (event) {
    const listItem = document.createElement("li")
    listItem.textContent = taskInputField.value;

    if(listItem.textContent == "") {
        event.preventDefault();
        return;
    }

    taskInputField.value = "";
    todoList.appendChild(listItem);
    event.preventDefault();
});