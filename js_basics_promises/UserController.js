import {Controller} from "./Controller.js";

export class UserController extends Controller {
    constructor(baseURL) {
        super(baseURL);
    }

    async getInfo(id) {
        try {
            const response = await fetch(this.baseURL.concat(`/users/${id}`));
            return await response.json();
        } catch (error) {
            console.log(error.message);
        }
    }
}