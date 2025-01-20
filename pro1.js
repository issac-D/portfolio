

document.getElementById('add-task').addEventListener('click', addTask);
document.getElementById('new-task').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');

    const taskText = taskInput.value.trim();
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;
    
    if (taskText !== '' && startDate !== '' && endDate !== '') {
        const taskList = document.getElementById('task-list');
        const taskItem = document.createElement('li');
        
        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;
        taskTextElement.addEventListener('click', function() {
            taskTextElement.parentElement.classList.toggle('completed');
        });

        const taskDatesElement = document.createElement('div');
        taskDatesElement.className = 'task-dates';
        taskDatesElement.textContent = `Start: ${startDate} | End: ${endDate}`;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskItem.remove();
        });
        
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(taskDatesElement);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        
        taskInput.value = '';
        startDateInput.value = '';
        endDateInput.value = '';
    }
}
