export default class PeopleClient {
    constructor(oblectoSession) {
        this.oblectoSession = oblectoSession;
    }

    async getInfo(personId) {
        const response = await this.oblectoSession.axios.get(`/person/${personId}/info`);
        return response.data;
    }

    async search(name, count = 20) {
        const response = await this.oblectoSession.axios.get(`/people/search/${encodeURIComponent(name)}`, { params: { count } });
        return response.data;
    }
}
