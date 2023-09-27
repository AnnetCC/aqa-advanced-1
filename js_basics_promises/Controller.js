export class Controller {
    constructor(url) {
        this._url = url;
    }

    get url() {
        return this._url;
    }

    async getInfo() {
        try {
            const response = await fetch(this.url);
            return await response.text();
        } catch (error) {
            console.log(error.message);
        }
    }
}