/* 
api loads data from a website/data from another address.
*/

function apiButton() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
};

function usersButton() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => userData(data))
};

function userData(data) {
    const ul = document.getElementById('user');
    for (const users of data) {
        const li = document.createElement('li');
        li.innerText = `name: ${users.name}`
        ul.appendChild(li);
    }
}