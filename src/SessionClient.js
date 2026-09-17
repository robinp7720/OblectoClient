export default class SessionClient {
    constructor(oblectoSession) { this.oblectoSession = oblectoSession; }
    async create(fileId, options = {}) {
        return (await this.oblectoSession.axios.post('/playback/sessions', { fileId, ...options })).data;
    }
    async get(id) { return (await this.oblectoSession.axios.get(`/playback/sessions/${id}`)).data; }
    async update(id, options) { return (await this.oblectoSession.axios.patch(`/playback/sessions/${id}`, options)).data; }
    async progress(id, progress) { await this.oblectoSession.axios.post(`/playback/sessions/${id}/progress`, progress); }
    async stop(id) { await this.oblectoSession.axios.delete(`/playback/sessions/${id}`); }
    mediaUrl(url) {
        const base = this.oblectoSession.axios.defaults.baseURL || window.location.origin;
        return new URL(url.replace(/^\//, ''), `${base.replace(/\/$/, '')}/`).toString();
    }
}
