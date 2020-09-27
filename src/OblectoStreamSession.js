export default class OblectoStreamSession {
    constructor(fileId, oblecto) {
        this.oblecto = oblecto;
        this.fileId = fileId;
    }

    async initSession() {
        let {data: {sessionId, seeking}} = await this.oblecto.axios.get(`/session/create/${this.fileId}`);

        this.sessionId = sessionId;
        this.severSideSeeking = (seeking === 'server');
    }

    getUrl(offset) {
        if (offset)
            return `${this.host}/session/stream/${this.sessionId}?offset=${offset}`
        return `${this.oblecto.host}/session/stream/${this.sessionId}`
    }

}
