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

    async createUser(username, password, name, email, flags = {}) {
        let response = await this.oblectoSession.axios.post(`/user`, {
            username,
            password,
            name,
            email,
            ...flags
        });

        return response.data;
    }

    /**
     * @param {number} id
     * @param {string|null} avatar the user's current `avatar`, used to bust caches
     * @returns {string|null} absolute URL, or null when the user has no avatar
     */
    avatarUrl(id, avatar) {
        if (!avatar) return null;

        const base = (this.oblectoSession.axios.defaults.baseURL || '').replace(/\/$/, '');

        return `${base}/user/${id}/avatar?v=${encodeURIComponent(avatar)}`;
    }

    async uploadAvatar(id, file) {
        const form = new FormData();

        form.append('avatar', file);

        let response = await this.oblectoSession.axios.put(`/user/${id}/avatar`, form, { timeout: 30000 });

        return response.data;
    }

    async removeAvatar(id) {
        let response = await this.oblectoSession.axios.delete(`/user/${id}/avatar`);

        return response.data;
    }

    async deleteUser(id) {
        let response = await this.oblectoSession.axios.delete(`/user/${id}`);

        return response.data;
    }
}
