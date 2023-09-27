import {Controller} from "./Controller.js";

export class TodoController extends Controller {
    constructor(url) {
        super(url);
    }

    async getInfo(id) {
        try {
            const response = await fetch(this.url.concat(`/todos/${id}`));
            return await response.json();
        } catch (error) {
            console.log(error.message);
        }
    }
}