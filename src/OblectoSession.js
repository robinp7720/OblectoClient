import axios from 'axios';
import MovieLibraryClient from './OblectoLibraryClients/MovieLibraryClient';
import SeriesLibraryClient from './OblectoLibraryClients/SeriesLibraryClient';
import EpisodeLibraryClient from './OblectoLibraryClients/EpisodeLibraryClient';
import UserManager from './UserManager';
import OblectoStreamSession from './OblectoStreamSession';
import OblectoRemotes from './OblectoRemotes';

export default class OblectoSession {
    constructor(host) {
        this.host = host;

        this.axios = axios.create({
            baseURL: host,
            timeout: 1000
        });

        this.movieLibrary = new MovieLibraryClient(this);
        this.seriesLibrary = new SeriesLibraryClient(this);
        this.episodeLibrary = new EpisodeLibraryClient(this);
        this.userManager = new UserManager(this);
        this.remotes = new OblectoRemotes(this);
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

    async createStreamSession(fileId) {
        let session = new OblectoStreamSession(fileId, this);
        await session.initSession();

        return session;
    }
}
