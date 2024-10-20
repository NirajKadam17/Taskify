const todoInput = document.getElementById('todo-input');
const addTask = document.getElementById('add-task-btn');
const todoUl = document.getElementById('todo-list');
const deleteButton = document.getElementById('delete-button');

let emptyarray = [];
let index = 0;

addTask.addEventListener('click', addTaskProcess);

function addTaskProcess() {
    index += 1;
    let result = todoInput.value.trim();
    if (result) {
        emptyarray.push({ task: result, id: index });
        render();
    }
    todoInput.value = ""
}
deleteButton.addEventListener('click',()=>{
       emptyarray = []
       render()
})

function render() {
    todoUl.innerHTML = "";
    emptyarray.forEach((element) => {
        let list = document.createElement('li');
        list.innerHTML = `${element.task} <button data-id="${element.id}">Done task</button>`;
        todoUl.appendChild(list);
    });
}

todoUl.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        let buttonId = e.target.getAttribute("data-id");
        let listItem = e.target.parentElement; 
        listItem.classList.add('completed');
    }
});


