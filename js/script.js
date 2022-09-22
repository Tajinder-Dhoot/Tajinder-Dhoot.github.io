
const getAndDisplayTodo = event => {
    const p = document.createElement('p');
    p.innerHTML = document.getElementById('getToDo').value;
    document.getElementById('displayAllToDo').appendChild(p);
    clearInputFieldById('getToDo');
} 

function clearInputFieldById(id) {
    document.getElementById(id).value = '';
}