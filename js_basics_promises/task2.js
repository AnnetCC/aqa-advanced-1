function getUserById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .catch(e => console.log(e.message));
}

function getTodoById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .catch(e => console.log(e.message));
}

const promise1 = Promise.all([getTodoById(1), getUserById(1)]);
promise1.then(value => console.log(value));

const promise2 = Promise.race([getTodoById(1), getUserById(1)]);
promise2.then(value => console.log(value));