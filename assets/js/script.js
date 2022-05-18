let formEl = document.querySelector("#task-form");
let tasksToDoEl = document.querySelector("#tasks-to-do");

function taskFormHandler(event) {
  event.preventDefault();
  let taskNameInput = document.querySelector("input[name='task-name']").value;
  let taskTypeInput = document.querySelector("select[name='task-type']").value;

  // Package up data as an object
  let taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
  };

  // Send taskDataObj to createTaskEl
  createTaskEl(taskDataObj);
}

function createTaskEl(taskDataObj) {
  // Create list item
  let listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // Create div to hold task info and add to list item
  let taskInfoEl = document.createElement("div");
  // Give div a class name
  taskInfoEl.className = "task-info";
  // add HTML content to div
  taskInfoEl.innerHTML = `<h3 class="task-name">${taskDataObj.name}</h3><span class="task-type">${taskDataObj.type}</span>`;

  listItemEl.appendChild(taskInfoEl);
  // Add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler);
