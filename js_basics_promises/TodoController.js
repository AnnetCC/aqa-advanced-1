import {Controller} from "./Controller.js";

export class TodoController extends Controller {
    constructor(baseURL) {
        super(baseURL);
    }

    async getInfo(id) {
        try {
            const response = await fetch(this.baseURL.concat(`/todos/${id}`));
            return await response.json();
        } catch (error) {
            console.log(error.message);
        }
    }
}