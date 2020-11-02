let expect = require('expect.js');

let OblectoSession = require('../dist/OblectoSession').default;

let username = 'robin';
let password = 'robin';

let host = 'http://localhost:8080';

describe('Oblecto Session', function () {
    describe('authenticate', async function () {
        it('access token', async function () {
            const oblectoSession = new OblectoSession(host);
            await oblectoSession.authenticate(username, password);
            console.log(oblectoSession.accessToken);
        });
    });

    describe('Movie Library', async function () {
        it('Movie Lists', async function () {
            const oblectoSession = new OblectoSession(host);
            await oblectoSession.authenticate(username, password);

            let response = await oblectoSession.movieLibrary.getLists();

            console.log(response);

            expect(response).to.be.an('array');
        });

        it('Movie Popularity List', async function () {
            const oblectoSession = new OblectoSession(host);
            await oblectoSession.authenticate(username, password);

            let response = await oblectoSession.movieLibrary.getList('popularity', 'asc');

            console.log(response);

            expect(response).to.be.an('array');
        });

        it('Movie Releasedate List', async function () {
            const oblectoSession = new OblectoSession(host);
            await oblectoSession.authenticate(username, password);

            let response = await oblectoSession.movieLibrary.getList('releaseDate', 'asc');

            console.log(response);

            expect(response).to.be.an('array');

        });

        describe('Movie Sets', async function () {
            it('Movie List Set', async function () {
                const oblectoSession = new OblectoSession(host);
                await oblectoSession.authenticate(username, password);

                let response = await oblectoSession.movieLibrary.getSets();

                console.log(response);

                expect(response).to.be.an('array');
            });
        });

        it('Movie Watchlist', async function () {
            const oblectoSession = new OblectoSession(host);
            await oblectoSession.authenticate(username, password);

            let response = await oblectoSession.movieLibrary.getWatching();

            console.log(response);

            expect(response).to.be.an('array');

        });
    });

    describe('Series Library', async function () {
        it('Movie Lists', async function () {
            const oblectoSession = new OblectoSession(host);
            await oblectoSession.authenticate(username, password);

            let response = await oblectoSession.seriesLibrary.getLists();

            console.log(response);

            expect(response).to.be.an('array');
        });

        it('Series Popularity List', async function () {
            const oblectoSession = new OblectoSession(host);
            await oblectoSession.authenticate(username, password);

            let response = await oblectoSession.seriesLibrary.getList('popularity', 'asc');

            console.log(response);

            expect(response).to.be.an('array');
        });

        it('Series First Aired List', async function () {
            const oblectoSession = new OblectoSession(host);
            await oblectoSession.authenticate(username, password);

            let response = await oblectoSession.seriesLibrary.getList('firstAired', 'asc');

            console.log(response);

            expect(response).to.be.an('array');

        });

        describe('Series Sets', async function () {
            it('Series List Set', async function () {
                const oblectoSession = new OblectoSession(host);
                await oblectoSession.authenticate(username, password);

                let response = await oblectoSession.seriesLibrary.getSets();

                console.log(response);

                expect(response).to.be.an('array');
            });
        });
    });

    describe('Episode Library', async function () {
        it('Episode Lists', async function () {
            const oblectoSession = new OblectoSession(host);
            await oblectoSession.authenticate(username, password);

            let response = await oblectoSession.episodeLibrary.getLists();

            console.log(response);

            expect(response).to.be.an('array');
        });

        it('Episode Created List', async function () {
            const oblectoSession = new OblectoSession(host);
            await oblectoSession.authenticate(username, password);

            let response = await oblectoSession.episodeLibrary.getList('createdAt', 'asc');

            console.log(response);

            expect(response).to.be.an('array');
        });

        it('Episode First Aired List', async function () {
            const oblectoSession = new OblectoSession(host);
            await oblectoSession.authenticate(username, password);

            let response = await oblectoSession.episodeLibrary.getList('firstAired', 'asc');

            console.log(response);

            expect(response).to.be.an('array');

        });

        describe('Episode Sets', async function () {
            it('Episode List Set', async function () {
                const oblectoSession = new OblectoSession(host);
                await oblectoSession.authenticate(username, password);

                let response = await oblectoSession.episodeLibrary.getSets();

                console.log(response);

                expect(response).to.be.an('array');
            });
        });
    });

    describe('User Manager', async function () {
        it('User List', async function () {
            const oblectoSession = new OblectoSession(host);
            await oblectoSession.authenticate(username, password);

            let response = await oblectoSession.userManager.getUsers();

            console.log(response);

            expect(response).to.be.an('array');
        });
    });

});
