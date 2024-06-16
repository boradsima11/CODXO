let todo = [];
const outputDiv = document.getElementById('output');
const commandInput = document.getElementById('commandInput');

function displayMessage(message) {
    const p = document.createElement('p');
    p.textContent = message;
    outputDiv.appendChild(p);
}

function clearOutput() {
    outputDiv.innerHTML = '';
}

function processCommand(command) {
    clearOutput();
    if (command === 'quit') {
        displayMessage('Quitting app');
        return;
    }
    if (command === 'list') {
        displayMessage('--------------');
        for (let i = 0; i < todo.length; i++) {
            displayMessage(i + ': ' + todo[i]);
        }
        displayMessage('--------------');
    }
    else if (command === 'add') {
        const task = prompt("Please enter task you want to add");
        todo.push(task);
        displayMessage('Task added');
    }
    else if (command === 'delete') {
        const idx = prompt("Please enter index of task you want to delete");
        if (idx >= 0 && idx < todo.length) {
            todo.splice(idx, 1);
            displayMessage('Task deleted');
        } else {
            displayMessage('Invalid index');
        }
    }
    else {
        displayMessage('Wrong request');
    }
}

commandInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const command = commandInput.value.trim().toLowerCase();
        processCommand(command);
        commandInput.value = '';
    }
});