export default class MovieLibraryClient {
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
        let response = await this.oblectoSession.axios.get(`/movies/lists`);

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
        let response = await this.oblectoSession.axios.get(`/movies/list/${listName}`, {
            params: {
                order,
                page,
                count
            }
        });

        return response.data;
    }

    /**
     * Retrieve detailed movie info.
     * @param {Number} movieId
     * @returns {Promise<Object>}
     */
    async getInfo(movieId) {
        let response = await this.oblectoSession.axios.get(`/movie/${movieId}/info`);

        return response.data;
    }

    /**
     * Search movies by name.
     * @param {String} name
     * @returns {Promise<Array>}
     */
    async search(name) {
        let response = await this.oblectoSession.axios.get(`/movies/search/${name}`);

        return response.data;
    }

    /**
     * Fetch movie poster image.
     * @param {Number} movieId
     * @param {String} size
     * @param {Object} config
     * @returns {Promise<any>}
     */
    async getPoster(movieId, size, config = {}) {
        let response = await this.oblectoSession.axios.get(`/movie/${movieId}/poster`, {
            ...config,
            params: {
                size,
                ...(config.params || {})
            }
        });

        return response.data;
    }

    /**
     * Upload movie poster image.
     * @param {Number} movieId
     * @param {File|FormData} file
     * @param {Object} config
     * @returns {Promise<any>}
     */
    async uploadPoster(movieId, file, config = {}) {
        let formData = file;
        if (typeof FormData !== 'undefined' && !(file instanceof FormData)) {
            formData = new FormData();
            formData.append('file', file);
        }

        let response = await this.oblectoSession.axios.put(`/movie/${movieId}/poster`, formData, config);

        return response.data;
    }

    /**
     * Fetch movie fanart image.
     * @param {Number} movieId
     * @param {String} size
     * @param {Object} config
     * @returns {Promise<any>}
     */
    async getFanart(movieId, size, config = {}) {
        let response = await this.oblectoSession.axios.get(`/movie/${movieId}/fanart`, {
            ...config,
            params: {
                size,
                ...(config.params || {})
            }
        });

        return response.data;
    }

    /**
     * Upload movie fanart image.
     * @param {Number} movieId
     * @param {File|FormData} file
     * @param {Object} config
     * @returns {Promise<any>}
     */
    async uploadFanart(movieId, file, config = {}) {
        let formData = file;
        if (typeof FormData !== 'undefined' && !(file instanceof FormData)) {
            formData = new FormData();
            formData.append('file', file);
        }

        let response = await this.oblectoSession.axios.put(`/movie/${movieId}/fanart`, formData, config);

        return response.data;
    }

    /**
     * Returns an array of all sets available
     * @returns {Promise<string[]>}
     */
    async getSets() {
        let response = await this.oblectoSession.axios.get(`/movies/sets`);

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
        let response = await this.oblectoSession.axios.get(`/movies/set/${setId}`, {
            params: {
                order,
                page,
                count
            }
        });

        return response.data;
    }

    /**
     * Get sets for a specific movie.
     * @param {Number} movieId
     * @returns {Promise<Array>}
     */
    async getMovieSets(movieId) {
        let response = await this.oblectoSession.axios.get(`/movie/${movieId}/sets`);

        return response.data;
    }

    /**
     * Add a movie to a set.
     * @param {Number} movieId
     * @param {Number} setId
     * @returns {Promise<any>}
     */
    async addMovieToSet(movieId, setId) {
        let response = await this.oblectoSession.axios.put(`/movie/${movieId}/sets`, {
            setId
        });

        return response.data;
    }

    async getWatching() {
        let response = await this.oblectoSession.axios.get(`/movies/watching`);

        return response.data;
    }

    /**
     * Redirect to movie playback.
     * @param {Number} movieId
     * @returns {Promise<any>}
     */
    async play(movieId) {
        let response = await this.oblectoSession.axios.get(`/movie/${movieId}/play`);

        return response.data;
    }
}
