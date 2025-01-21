document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a task
    function addTask(taskText, save = true) {
        // Task creation logic
        const newTask = document.createElement("li");
        newTask.textContent = taskText;

        // Create a Remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // Remove task from DOM and Local Storage when clicked
        removeButton.onclick = function () {
            taskList.removeChild(newTask);

            // Remove from localStorage
            let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks = storedTasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        };

        // Append the remove button to the li element
        newTask.appendChild(removeButton);

        // Append the new task to the task list
        taskList.appendChild(newTask);

        // Save to localStorage if required
        if (save) {
            let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Clear the task input field
        taskInput.value = "";
    }

    // Attach event listener to the "Add Task" button
    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
        } else {
            alert("Please enter a task!");
        }
    });

    // Attach event listener for "Enter" key press to add task
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                addTask(taskText);
            } else {
                alert("Please enter a task!");
            }
        }
    });

    // Load tasks from Local Storage when the page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); 
    }

    loadTasks(); // Load tasks when page is loaded
});