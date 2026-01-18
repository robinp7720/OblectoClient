export default class LibrariesClient {
    /**
     * @param {OblectoSession} oblectoSession
     */
    constructor(oblectoSession) {
        this.oblectoSession = oblectoSession;
    }

    async listLibraries() {
        let response = await this.oblectoSession.axios.get('/api/v1/libraries');

        return response.data;
    }

    async getLibraryPaths(type) {
        let response = await this.oblectoSession.axios.get(`/api/v1/libraries/${type}`);

        return response.data;
    }

    async updateLibraryConfig(type, payload) {
        let response = await this.oblectoSession.axios.patch(`/api/v1/libraries/${type}`, payload);

        return response.data;
    }

    async addPath(type, path) {
        let response = await this.oblectoSession.axios.post(`/api/v1/libraries/${type}/paths`, {
            path
        });

        return response.data;
    }

    async removePath(type, path) {
        let response = await this.oblectoSession.axios.delete(`/api/v1/libraries/${type}/paths`, {
            data: {
                path
            }
        });

        return response.data;
    }
}
