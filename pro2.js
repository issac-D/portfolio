// script.js

document.getElementById('project-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const projectName = document.getElementById('project-name').value;
    const projectDescription = document.getElementById('project-description').value;

    const projectList = document.getElementById('project-list');
    const listItem = document.createElement('li');

    listItem.innerHTML = `<strong>${projectName}</strong><p>${projectDescription}</p>`;
    projectList.appendChild(listItem);

    document.getElementById('project-form').reset();
});
