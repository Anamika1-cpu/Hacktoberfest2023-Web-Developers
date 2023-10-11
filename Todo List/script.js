function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText}
        <button class="delete-button" onclick="removeTask(this)">Delete</button>
    `;

    taskList.appendChild(li);

    taskInput.value = '';
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}
