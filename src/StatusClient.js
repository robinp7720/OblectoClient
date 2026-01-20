export default class StatusClient {
    /**
     * @param {OblectoSession} oblectoSession
     */
    constructor(oblectoSession) {
        this.oblectoSession = oblectoSession;
    }

    async getSessions() {
        let response = await this.oblectoSession.axios.get('/api/v1/status/sessions');

        return response.data;
    }

    async getClients() {
        let response = await this.oblectoSession.axios.get('/api/v1/status/clients');

        return response.data;
    }

    async getSeedboxStatus() {
        let response = await this.oblectoSession.axios.get('/api/v1/status/seedbox');

        return response.data;
    }
}
