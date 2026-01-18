export default class SessionClient {
    /**
     * @param {OblectoSession} oblectoSession
     */
    constructor(oblectoSession) {
        this.oblectoSession = oblectoSession;
    }

    async create(fileId, params = {}) {
        let response = await this.oblectoSession.axios.get(`/session/create/${fileId}`, {
            params
        });

        return response.data;
    }

    async stream(sessionId, params = {}, config = {}) {
        let response = await this.oblectoSession.axios.get(`/session/stream/${sessionId}`, {
            ...config,
            params
        });

        return response.data;
    }

    getStreamUrl(sessionId, params = {}) {
        let baseURL = this.oblectoSession.axios.defaults.baseURL || '';
        let query = new URLSearchParams(params).toString();
        let url = `${baseURL}/session/stream/${sessionId}`;

        return query ? `${url}?${query}` : url;
    }

    async getHlsSegment(sessionId, id, config = {}) {
        let response = await this.oblectoSession.axios.get(`/HLS/${sessionId}/segment/${id}`, config);

        return response.data;
    }
}
