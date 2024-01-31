const { initializeDB } = require('./db');

(async () => {
    await initializeDB();
    const app = require('./api');
    await app.start();
})();