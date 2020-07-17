export default class MovieLibraryClient {
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
}
