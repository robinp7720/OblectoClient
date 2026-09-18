// The signed-in user's own account: profile, password, avatar and preferences.
export default class AccountClient {
    /**
     * @param {OblectoSession} oblectoSession
     */
    constructor(oblectoSession) {
        this.oblectoSession = oblectoSession;
    }

    /**
     * @returns {Promise<object>} the user, plus `hasPassword`, `group`, `permissions` and `preferences`
     */
    async get() {
        let response = await this.oblectoSession.axios.get('/api/v1/me');

        return response.data;
    }

    /**
     * @param {{ name?: string, email?: string, preferences?: object }} changes
     *   preferences are merged server-side, so send only the ones that changed
     */
    async update(changes) {
        let response = await this.oblectoSession.axios.patch('/api/v1/me', changes);

        return response.data;
    }

    /**
     * @param {string|undefined} currentPassword may be omitted when the account has none
     * @param {string} newPassword
     */
    async changePassword(currentPassword, newPassword) {
        let response = await this.oblectoSession.axios.put('/api/v1/me/password', { currentPassword, newPassword });

        return response.data;
    }

    async uploadAvatar(file) {
        const form = new FormData();

        form.append('avatar', file);

        let response = await this.oblectoSession.axios.put('/api/v1/me/avatar', form, { timeout: 30000 });

        return response.data;
    }

    async removeAvatar() {
        let response = await this.oblectoSession.axios.delete('/api/v1/me/avatar');

        return response.data;
    }
}
