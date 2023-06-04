const formTask = document.getElementById("form");
const inputTask = document.getElementById("task");
const listTask = document.getElementById("list");

formTask.addEventListener('submit', addTask);

function addTask(e){
    e.preventDefault();

    if(inputTask.value == '')
    {
        return;
    }
        const task = document.createElement("li");
        task.innerHTML = `
        <input type="checkbox">
        <p>${inputTask.value}</p>
        <button type="button">Delete</button>
        `;
        task.querySelector('input[type="checkbox"]').addEventListener('change', toggleDone);
        task.querySelector('button').addEventListener('click',removeTask);

        list.appendChild(task);
        inputTask.value = '';
        saveData();}

function toggleDone(e){
    const task = e.target.parentNode;
    task.querySelector('p').classList.toggle('done');
}

function removeTask(e){
    const task = e.target.parentNode;
    list.removeChild(task);
}
