export default class FilesClient {
    /**
     * @param {OblectoSession} oblectoSession
     */
    constructor(oblectoSession) {
        this.oblectoSession = oblectoSession;
    }

    async getDuplicates() {
        let response = await this.oblectoSession.axios.get('/files/duplicates');

        return response.data;
    }

    async getProblematic() {
        let response = await this.oblectoSession.axios.get('/files/problematic');

        return response.data;
    }

    async retryFile(fileId) {
        let response = await this.oblectoSession.axios.post(`/files/${fileId}/retry`);

        return response.data;
    }
}
