export class Controller {
    constructor(baseURL) {
        this._baseURL = baseURL;
    }

    get baseURL() {
        return this._baseURL;
    }

    async getInfo() {
        try {
            const response = await fetch(this.baseURL);
            return await response.text();
        } catch (error) {
            console.log(error.message);
        }
    }
}