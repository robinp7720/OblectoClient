export default class OblectoRemotes {
    constructor(oblectoSession) {
        this.oblectoSession = oblectoSession;
    }

    async getClients() {
        let response = await this.oblectoSession.axios.get(`/clients`);

        return response.data;
    }
}
