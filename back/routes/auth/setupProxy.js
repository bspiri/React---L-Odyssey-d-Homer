const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/auth/signup', { target: 'http://localhost:3000/auth/signup' }));
    app.use(proxy('/signup', { target: 'http://localhost:3000/signup' }));
}