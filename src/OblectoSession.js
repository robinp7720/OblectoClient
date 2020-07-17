import axios from 'axios';
import MovieLibraryClient from './OblectoLibraryClients/MovieLibraryClient';
import SeriesLibraryClient from './OblectoLibraryClients/SeriesLibraryClient';
import EpisodeLibraryClient from './OblectoLibraryClients/EpisodeLibraryClient';
import UserManager from './UserManager';

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
