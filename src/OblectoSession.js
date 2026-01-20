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
import RemoteClient from './RemoteClient';
import SetsClient from './SetsClient';
import StatusClient from './StatusClient';

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
        this.remotes = new RemoteClient(this);
        this.sets = new SetsClient(this);
        this.status = new StatusClient(this);
    }

    async getSessionToken(username, password) {
        let response = await this.axios.post('/auth/login', {
            username,
            password
        });

        return response.data.accessToken;
    }

    async authenticate(username, password) {
        this.username = username;

        this.accessToken = await this.getSessionToken(username, password);

        this.axios.defaults.headers.common = {'Authorization': `bearer ${this.accessToken}`};
    }
}
