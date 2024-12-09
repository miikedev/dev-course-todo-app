const fetchBtn = document.querySelector("#fetch-todos");
const taskList = document.querySelector("#task-list");

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

fetchBtn.addEventListener('click',fetchTodos)

async function fetchTodos() {
    try{
        const response = await fetch(API_URL);
        const todos = await response.json();
        const limitedTodos = todos.slice(0,10);
        limitedTodos.forEach(todo => addTaskToDOM(todo.title,todo.id));
    }catch(error){
        errorDiv.error('Error fetching tasking',error)
    }
}

function addTaskToDOM(task,id=Date.now()){
    const li = document.createElement('li');
    li.innerHTML=`
    <input type="checkbox"></input>
    <spam>${task}</spam>
    <button onclick="deleteTask(this,${id})">Delete</button>
    `;
    taskList.appendChild(li);
}