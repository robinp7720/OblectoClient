// User groups and the permissions they grant. Needs users.manage.
export default class GroupsClient {
    /**
     * @param {OblectoSession} oblectoSession
     */
    constructor(oblectoSession) {
        this.oblectoSession = oblectoSession;
    }

    /**
     * @returns {Promise<{ key: string, description: string }[]>}
     */
    async getPermissions() {
        let response = await this.oblectoSession.axios.get('/api/v1/permissions');

        return response.data;
    }

    /**
     * @returns {Promise<{ id: number, name: string, permissions: string[], builtIn: boolean, members: number }[]>}
     */
    async getGroups() {
        let response = await this.oblectoSession.axios.get('/api/v1/groups');

        return response.data;
    }

    async createGroup(name, permissions = []) {
        let response = await this.oblectoSession.axios.post('/api/v1/groups', { name, permissions });

        return response.data;
    }

    /**
     * @param {number} id
     * @param {{ name?: string, permissions?: string[] }} changes
     */
    async updateGroup(id, changes) {
        let response = await this.oblectoSession.axios.patch(`/api/v1/groups/${id}`, changes);

        return response.data;
    }

    // Members move to the default group.
    async deleteGroup(id) {
        let response = await this.oblectoSession.axios.delete(`/api/v1/groups/${id}`);

        return response.data;
    }
}
