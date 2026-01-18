export default class RemoteClient {
    /**
     * @param {OblectoSession} oblectoSession
     */
    constructor(oblectoSession) {
        this.oblectoSession = oblectoSession;
    }

    async getClients() {
        let response = await this.oblectoSession.axios.get('/clients');

        return response.data;
    }

    async playback(clientId, type, id) {
        let response = await this.oblectoSession.axios.post(`/client/${clientId}/playback`, {
            type,
            id,
            clientId
        });

        return response.data;
    }
}
