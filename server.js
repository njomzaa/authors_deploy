const cookieParser = require('cookie-parser');
const session = require('express-session');
const parser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const {
  env: { PORT: port = 8000 },
} = process;
const app = express();

require('./server/config/database');

app
  .use(parser.urlencoded({ extended: true }))
  .use(parser.json())
  .use(logger('dev'))
  .use(cookieParser(';sldfkgj;sdlfkgjds;lkfgj;sdfkg'))
  .use(
    session({
      saveUninitialized: true,
      secret: 'a;lsdfjnawoeina;oidvn;asilnf',
      resave: false,
      name: 'session',
      rolling: true,
      cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 36000000,
      },
    })
  )
  .use(express.static(path.join(__dirname, 'dist/authors')))
  .use(require('./server/routes'))
  .listen(port, () => console.log(`Express server listening on port ${port}`));