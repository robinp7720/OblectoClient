export default class SettingsClient {
    /**
     * @param {OblectoSession} oblectoSession
     */
    constructor(oblectoSession) {
        this.oblectoSession = oblectoSession;
    }

    async getAll() {
        let response = await this.oblectoSession.axios.get('/api/v1/settings');

        return response.data;
    }

    async update(config) {
        let response = await this.oblectoSession.axios.patch('/api/v1/settings', config);

        return response.data;
    }

    async getSection(section) {
        let response = await this.oblectoSession.axios.get(`/api/v1/settings/${section}`);

        return response.data;
    }

    async updateSection(section, payload) {
        let response = await this.oblectoSession.axios.patch(`/api/v1/settings/${section}`, payload);

        return response.data;
    }
}
