
const form = document.getElementById("task-creator");
const taskCreatorInputField = document.getElementById("task-input");
const todoList = document.getElementById("todo-list");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const task = createElement("label").appendChild(
        createElement("input")
            .setInputType("checkbox")
            .getInstance()
    ).setTextContent(taskCreatorInputField.value);

    const listItem = createElement("li")
        .setClassName("task")
        .appendChild(task.getInstance());
    
    if(listItem.getTextContent() == "") return;

    taskCreatorInputField.value = ""; // clear input field
    todoList.appendChild(listItem.getInstance());
});

function createElement(htmlElement) {
    const element = document.createElement(htmlElement);
    const self = {
        getInstance: () => element,
        getTextContent: () => element.textContent,
        setTextContent: (textContent) => {
            element.appendChild(document.createTextNode(textContent)); 
            return self;
        },
        setInputType: (inputType) => {
            element.type = inputType;
            return self;
        },
        setClassName: (className) => {
            element.className = className;
            return self;
        },
        setName: (name) => {
            element.name = name;
            return self;
        },
        assignLabelTo: (elementName) => {
            element.htmlFor = elementName;
            return self;
        },
        appendChild: (child) => {
            element.appendChild(child);
            return self;
        },
        // appendChildren: (...children) => {
        //     element.append(...children);
        //     return self;
        // }
    }

    return self;
}