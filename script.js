function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const taskItem = document.createElement("li");

        // Create a span element to hold the task text
        const taskTextSpan = document.createElement("span");
        taskTextSpan.innerText = taskText;

        // Create a delete button for each task
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function () {
            taskList.removeChild(taskItem);
        };

        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
        input.value = "";
    }
}

function toggleTask() {
    this.classList.toggle("completed");
}

document.getElementById("taskInput").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
