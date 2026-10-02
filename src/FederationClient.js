export default class FederationClient {
    constructor(session) { this.session = session; }
    async request(method, path, data) {
        return (await this.session.axios.request({ method, url: `/api/v1/federation${path}`, data, timeout: 70000 })).data;
    }
    status() { return this.request('get', '/status'); }
    identity() { return this.request('get', '/identity'); }
    setup(address) { return this.request('post', '/identity', { address }); }
    invitation() { return this.request('post', '/invitations'); }
    revokeInvitation(id) { return this.request('delete', `/invitations/${encodeURIComponent(id)}`); }
    pair(invitation) { return this.request('post', '/pairings', { invitation }); }
    cancelPairing(id) { return this.request('delete', `/pairings/${encodeURIComponent(id)}`); }
    savePeer(id, peer) { return this.request('put', `/peers/${encodeURIComponent(id)}`, peer); }
    removePeer(id, purge = false) { return this.request('delete', `/peers/${encodeURIComponent(id)}?purge=${purge}`); }
    action(id, action) { return this.request('post', `/peers/${encodeURIComponent(id)}/${action}`); }
}
