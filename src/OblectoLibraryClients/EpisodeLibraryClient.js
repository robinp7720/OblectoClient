export default class EpisodeLibraryClient {
    /**
     *
     * @param {OblectoSession} oblectoSession
     */
    constructor(oblectoSession) {
        this.oblectoSession = oblectoSession;
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
        let response = await this.oblectoSession.axios.get(`/episodes/list/${listName}`, {
            params: {
                order,
                page,
                count
            }
        });

        return response.data;
    }

    async getInfo(episodeId) {
        let response = await this.oblectoSession.axios.get(`/episode/${episodeId}/info`);

        return response.data;
    }

    async getNext(episodeId) {
        let response = await this.oblectoSession.axios.get(`/episode/${episodeId}/next`);

        return response.data;
    }

    async search(name) {
        let response = await this.oblectoSession.axios.get(`/episodes/search/${name}`);

        return response.data;
    }

    async getBanner(episodeId, size, config = {}) {
        let response = await this.oblectoSession.axios.get(`/episode/${episodeId}/banner`, {
            ...config,
            params: {
                size,
                ...(config.params || {})
            }
        });

        return response.data;
    }

    async uploadBanner(episodeId, file, config = {}) {
        let formData = file;
        if (typeof FormData !== 'undefined' && !(file instanceof FormData)) {
            formData = new FormData();
            formData.append('file', file);
        }

        let response = await this.oblectoSession.axios.put(`/episode/${episodeId}/banner`, formData, config);

        return response.data;
    }

    /**
     * Returns an array of all sets available
     * @returns {Promise<string[]>}
     */
    async getSets() {
        let response = await this.oblectoSession.axios.get(`/episodes/sets`);

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
        let response = await this.oblectoSession.axios.get(`/episodes/set/${setId}`, {
            params: {
                order,
                page,
                count
            }
        });

        return response.data;
    }

    async getWatching() {
        let response = await this.oblectoSession.axios.get(`/episodes/watching`);

        return response.data;
    }

    async getNextUp() {
        let response = await this.oblectoSession.axios.get(`/episodes/next`);

        return response.data;
    }

    async play(episodeId) {
        let response = await this.oblectoSession.axios.get(`/episode/${episodeId}/play`);

        return response.data;
    }
}
