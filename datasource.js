import { RESTDataSource } from "apollo-datasource-rest";

export class SocialApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:8000/';
    }

    async getPosts() {
        return this.get('en/blog/posts');
    }

    async createUser(args = {}) {
        return await this.post('en/blog/user/create', args);
    }
}