export default class SetsClient {
    /**
     * @param {OblectoSession} oblectoSession
     */
    constructor(oblectoSession) {
        this.oblectoSession = oblectoSession;
    }

    async createMovieSet(payload) {
        let response = await this.oblectoSession.axios.post('/set/movie', payload);

        return response.data;
    }

    async createSeriesSet(payload) {
        let response = await this.oblectoSession.axios.post('/set/series', payload);

        return response.data;
    }

    async deleteMovieSet(setId) {
        let response = await this.oblectoSession.axios.delete(`/set/movie/${setId}`);

        return response.data;
    }

    async deleteSeriesSet(setId) {
        let response = await this.oblectoSession.axios.delete(`/set/series/${setId}`);

        return response.data;
    }
}
