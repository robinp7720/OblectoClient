import axios from 'axios';
import MovieLibraryClient from './OblectoLibraryClients/MovieLibraryClient';
import SeriesLibraryClient from './OblectoLibraryClients/SeriesLibraryClient';
import EpisodeLibraryClient from './OblectoLibraryClients/EpisodeLibraryClient';
import UserManager from './UserManager';
import SettingsClient from './SettingsClient';
import LibrariesClient from './LibrariesClient';
import SystemClient from './SystemClient';
import FilesClient from './FilesClient';
import SessionClient from './SessionClient';
import SetsClient from './SetsClient';
import StatusClient from './StatusClient';
import AccountClient from './AccountClient';
import GroupsClient from './GroupsClient';

export default class OblectoSession {
    constructor(host) {
        this.axios = axios.create({
            baseURL: host,
            timeout: 1000
        });

        this.movieLibrary = new MovieLibraryClient(this);
        this.seriesLibrary = new SeriesLibraryClient(this);
        this.episodeLibrary = new EpisodeLibraryClient(this);
        this.userManager = new UserManager(this);
        this.settings = new SettingsClient(this);
        this.libraries = new LibrariesClient(this);
        this.system = new SystemClient(this);
        this.files = new FilesClient(this);
        this.sessions = new SessionClient(this);
        // Remote play moved to the realtime socket: commands need acks and a
        // live state stream back, which REST gave neither of.
        this.sets = new SetsClient(this);
        this.status = new StatusClient(this);
        this.account = new AccountClient(this);
        this.groups = new GroupsClient(this);
    }

    /**
     * What the login screen should offer: whether this client is on the local
     * network and, if so, which users to show on the profile picker.
     */
    async getLoginOptions() {
        let response = await this.axios.get('/auth/login-options');

        return response.data;
    }

    /**
     * @param {{ username?: string, userId?: number, password?: string }} credentials
     */
    async getSessionToken(credentials) {
        let response = await this.axios.post('/auth/login', credentials);

        return response.data.accessToken;
    }

    /**
     * @param {string|{ username?: string, userId?: number, password?: string }} username
     *   a username, or credentials identifying the user by id (profile picker)
     * @param {string} [password] omitted for local-network password-less sign-in
     */
    async authenticate(username, password) {
        const credentials = typeof username === 'object' ? username : { username, password };

        this.username = credentials.username;

        this.accessToken = await this.getSessionToken(credentials);

        this.axios.defaults.headers.common = {'Authorization': `bearer ${this.accessToken}`};
    }
}
