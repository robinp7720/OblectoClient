export default class SeriesLibraryClient {
    /**
     *
     * @param {OblectoSession} oblectoSession
     */
    constructor(oblectoSession) {
        this.oblectoSession = oblectoSession;
    }

    /**
     * Returns an array with names of all lists available
     * @returns {Promise<string[]>}
     */
    async getLists() {
        let response = await this.oblectoSession.axios.get(`/series/lists`);

        return response.data;
    }

    /**
     * Returns a single page of the list with the specified name
     * @param {String} listName
     * @param {String} order
     * @param {Number} count
     * @param {Number} page
     * @returns {Promise<string[]>}
     */
    async getList(listName, order, count, page) {
        let response = await this.oblectoSession.axios.get(`/series/list/${listName}`, {
            params: {
                order,
                page,
                count
            }
        });

        return response.data;
    }

    /**
     * Returns an array of all sets available
     * @returns {Promise<string[]>}
     */
    async getSets() {
        let response = await this.oblectoSession.axios.get(`/series/sets`);

        return response.data;
    }

    /**
     * Returns a single page of the list with the specified name
     * @param {Number} setId
     * @param {String} order
     * @param {Number} count
     * @param {Number} page
     * @returns {Promise<string[]>}
     */
    async getSet(setId, order, count, page) {
        let response = await this.oblectoSession.axios.get(`/series/set/${setId}`, {
            params: {
                order,
                page,
                count
            }
        });

        return response.data;
    }

    async getInfo(seriesId) {
        let response = await this.oblectoSession.axios.get(`/series/${seriesId}/info`);

        return response.data;
    }

    async getEpisodes(seriesId) {
        let response = await this.oblectoSession.axios.get(`/series/${seriesId}/episodes`);

        return response.data;
    }

    async search(name) {
        let response = await this.oblectoSession.axios.get(`/shows/search/${name}`);

        return response.data;
    }

    async getPoster(seriesId, size, config = {}) {
        let response = await this.oblectoSession.axios.get(`/series/${seriesId}/poster`, {
            ...config,
            params: {
                size,
                ...(config.params || {})
            }
        });

        return response.data;
    }

    async uploadPoster(seriesId, file, config = {}) {
        let formData = file;
        if (typeof FormData !== 'undefined' && !(file instanceof FormData)) {
            formData = new FormData();
            formData.append('file', file);
        }

        let response = await this.oblectoSession.axios.put(`/series/${seriesId}/poster`, formData, config);

        return response.data;
    }

    async indexSeries(seriesId) {
        let response = await this.oblectoSession.axios.get(`/series/${seriesId}/index`);

        return response.data;
    }
}
