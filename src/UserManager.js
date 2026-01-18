export default class UserManager {
    /**
     * @param {OblectoSession} oblectoSession
     */
    constructor(oblectoSession) {
        this.oblectoSession = oblectoSession;
    }

    async getUsers() {
        let response = await this.oblectoSession.axios.get(`/users`);

        return response.data;
    }

    async getUser(id) {
        let response = await this.oblectoSession.axios.get(`/user/${id}`);

        return response.data;
    }

    async updateUser(id, info) {
        let response = await this.oblectoSession.axios.put(`/user/${id}`, info);

        return response.data;
    }

    async createUser(username, password, name, email) {
        let response = await this.oblectoSession.axios.post(`/user`, {
            username,
            password,
            name,
            email
        });

        return response.data;
    }

    async deleteUser(id) {
        let response = await this.oblectoSession.axios.delete(`/user/${id}`);

        return response.data;
    }
}
