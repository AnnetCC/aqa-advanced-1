async function getTodoById(input) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${1}`)
        return await response.json();
    } catch (error) {
        console.log(error.message);
    }
}

async function getUserById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${1}`)
        return await response.json();
    } catch (error) {
        console.log(error.message);
    }
}

const promise1 = await Promise.all([getTodoById(1), getUserById(1)]);
const promise2 = await Promise.race([getTodoById(1), getUserById(1)]);
console.log(promise1);
console.log(promise2);