const catchAllRouter = require('./catch-all.route');
const authRouter = require('./auth.routes');
const router = require('express').Router();
const api = require('express').Router();
const authorRouter = require('./author.route');



router.use('/auth', authRouter).use('/authors', authorRouter);


module.exports = api.use('/api', router).use(catchAllRouter);