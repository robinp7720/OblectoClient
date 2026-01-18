export default class SystemClient {
    /**
     * @param {OblectoSession} oblectoSession
     */
    constructor(oblectoSession) {
        this.oblectoSession = oblectoSession;
    }

    async triggerMaintenance(action, target) {
        let response = await this.oblectoSession.axios.post('/api/v1/system/maintenance', {
            action,
            target
        });

        return response.data;
    }

    async triggerImport(source, type) {
        let response = await this.oblectoSession.axios.post('/api/v1/system/imports', {
            source,
            type
        });

        return response.data;
    }

    async getInfo() {
        let response = await this.oblectoSession.axios.get('/api/v1/system/info');

        return response.data;
    }

    async getCapabilities() {
        let response = await this.oblectoSession.axios.get('/api/v1/system/capabilities');

        return response.data;
    }
}
