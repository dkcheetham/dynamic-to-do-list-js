document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if taskText is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new li element
        const newTask = document.createElement("li");
        newTask.textContent = taskText;

        // Create a Remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // Assign the click event to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(newTask);
        };

        // Append the remove button to the li element
        newTask.appendChild(removeButton);

        // Append the new task to the task list
        taskList.appendChild(newTask);

        // Clear the task input field
        taskInput.value = "";
    }

    // Attach event listener to the "Add Task" button
    addButton.addEventListener("click", addTask);

    // Attach event listener for "Enter" key press to add task
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});