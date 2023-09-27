function getUserInfo(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .catch(e => console.log(e.message));
}

function getTodoInfo(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .catch(e => console.log(e.message));
}

const promise1 = Promise.all([getTodoInfo(1), getUserInfo(1)]);
promise1.then(value => console.log(value));

const promise2 = Promise.race([getTodoInfo(1), getUserInfo(1)]);
promise2.then(value => console.log(value));