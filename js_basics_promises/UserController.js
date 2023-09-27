import {Controller} from "./Controller.js";

export class UserController extends Controller {
    constructor(url) {
        super(url);
    }

    async getInfo(id) {
        try {
            const response = await fetch(this.url.concat(`/users/${id}`));
            return await response.json();
        } catch (error) {
            console.log(error.message);
        }
    }
}