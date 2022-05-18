let formEl = document.querySelector("#task-form");
let tasksToDoEl = document.querySelector("#tasks-to-do");

let createTaskHandler = function (event) {
  event.preventDefault();
  let taskNameInput = document.querySelector("input[name='task-name']").value;
  let taskTypeInput = document.querySelector("select[name='task-type']").value;

  // Create list item
  let listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // Create div to hold task info and add to list item
  let taskInfoEl = document.createElement("div");
  // Give div a class name
  taskInfoEl.className = "task-info";
  // add HTML content to div
  taskInfoEl.innerHTML = `<h3 class="task-name">${taskNameInput}</h3><span class="task-type">${taskTypeInput}</span>`;

  listItemEl.appendChild(taskInfoEl);
  // Add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);
