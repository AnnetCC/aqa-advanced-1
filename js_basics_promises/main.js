import {TodoController} from "./TodoController.js";
import {UserController} from "./UserController.js";

const baseURL = "https://jsonplaceholder.typicode.com";
const user = new UserController(baseURL);
const todo = new TodoController(baseURL);

const userInfo = await user.getInfo(1);
const todoInfo = await todo.getInfo(3);

console.log(`User info: ${JSON.stringify(userInfo, null, ' ')}`);
console.log(`Todo info: ${JSON.stringify(todoInfo, null, ' ')}`);