// Get references to HTML elements
var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  if (taskInput.value.trim() !== "") {
    // Create new task item
    var li = document.createElement("li");
    var taskText = document.createElement("span");
    taskText.innerText = taskInput.value;
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete-button";

    // Delete task on button click
    deleteButton.addEventListener("click", function() {
      li.remove();
    });

    // Add task text and delete button to task item
    li.appendChild(taskText);
    li.appendChild(deleteButton);

    // Add task item to the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
  }
}

// Add new task on button click
addButton.addEventListener("click", addTask);

// Add new task on Enter key press
taskInput.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addTask();
  }
});
