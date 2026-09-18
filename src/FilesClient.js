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

    /**
     * @param {object} [options]
     * @param {'identify'|'probe'} [options.stage] - Only files that failed at this stage
     * @param {boolean} [options.includeIgnored] - Also list files marked as ignored
     */
    async getProblematic({ stage, includeIgnored } = {}) {
        let params = {};

        if (stage) params.stage = stage;
        if (includeIgnored) params.includeIgnored = 'true';

        let response = await this.oblectoSession.axios.get('/files/problematic', { params });

        return response.data;
    }

    /**
     * Queue a retry of whichever stage failed. The file stays problematic until
     * the retry succeeds. Rejects with status 410 if the file no longer exists,
     * in which case the server has removed it.
     * @param {number} fileId
     */
    async retryFile(fileId) {
        let response = await this.oblectoSession.axios.post(`/files/${fileId}/retry`);

        return response.data;
    }

    /**
     * Retry every problematic file that is not ignored. Files that no longer
     * exist are removed; files outside every library directory are skipped.
     * @param {'identify'|'probe'} [stage] - Only retry files that failed at this stage
     * @returns {Promise<{ queued: number, removedIds: number[], skippedIds: number[] }>}
     */
    async retryAllProblematic(stage) {
        let response = await this.oblectoSession.axios.post('/files/problematic/retry', stage ? { stage } : {});

        return response.data;
    }

    /**
     * Hide or unhide a problematic file, e.g. a sample or extra that will never be identified
     * @param {number} fileId
     * @param {boolean} problemIgnored
     */
    async setProblemIgnored(fileId, problemIgnored) {
        let response = await this.oblectoSession.axios.patch(`/files/${fileId}`, { problemIgnored });

        return response.data;
    }
}
