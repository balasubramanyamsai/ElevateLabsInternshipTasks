const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    addTask(taskText);
    taskInput.value = "";
});

// Add task to list
function addTask(taskText) {
    const li = document.createElement("li");

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Check button
    const checkBtn = document.createElement("button");
    checkBtn.textContent = "✔️";
    checkBtn.classList.add("check-btn");
    checkBtn.addEventListener("click", () =>{
        li.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(checkBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// Add task on pressing Enter
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTaskBtn.click();
    }
});
