let taskList = [];

document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    let taskInput = document.getElementById('task-input');
    let task = taskInput.value.trim();

    if (task) {
        taskList.push({ text: task, completed: false });
        taskInput.value = '';
        renderTaskList();
    }
}

function renderTaskList() {
    let taskListElement = document.getElementById('task-list');
    taskListElement.innerHTML = '';

    taskList.forEach((task, index) => {
        let taskElement = document.createElement('li');
        taskElement.textContent = task.text;

        if (task.completed) {
            taskElement.classList.add('completed');
        }

        taskElement.addEventListener('click', () => {
            task.completed = !task.completed;
            renderTaskList();
        });

        taskListElement.appendChild(taskElement);
    });
}

renderTaskList();