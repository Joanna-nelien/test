const todoListElem = document.querySelector("#todo-list");
const inputElem = document.querySelector("#input-task");
const buttonElem = document.querySelector("#add-todo");

function createTodo(task) {
    const todoElem = document.createElement("li");
    todoElem.textContent = task;
    console.log(todoElem);
    todoElem.classList.add("todo");

    todoListElem.appendChild(todoElem);
}
    buttonElem.addEventListener("click", () => {
    const task = inputElem.value;
    console.log("står i inputfältet: ", task);

    createTodo(task);
    });

/*createTodo("Köpa kaffe");
createTodo("Läsa bok");
createTodo("Träna");   
createTodo("Gå på bio");

const todoElems = document.querySelectorAll("li");

console.log(todoElems);

/* let listElem = document.querySelector("ul");

 for(let i=0;i<2;i++){
    let listItem = document.createElement("li");
    listItem.innerHTML = i;

    listElem.appendChild(listItem);
 }*/

    // skapa inte i onödan i javascrpt till html