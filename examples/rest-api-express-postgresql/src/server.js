import express from 'express';
import bodyParser from 'body-parser';

import logger from './logger';
import initDb from './db';
import { setupDB, getUsers, getUserByUsername, createUser } from './db/queries';

const app = express();
const router = express.Router();
const port = 3000;
const dbClient = initDb('localhost', 'api_db', 5432, 'admin', 'password');

const server = async (app, router, port, logger, dbClient) => {
  await setupDB(dbClient, logger);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(async (err, req, res, next) => {
    logger.error(`An error occured, ${err}`);
    res.status(err.status).json({ 'status': err.status, 'message': err.message });
  });

  router.use(function (req, res, next) {
    logger.info(`${req.method} on ${req.path}`);
    next();
  })
  
  router.get('/', (req, res) => res.json({ message: 'Running' }));

  router.get('/users', async (req, res) => {
    const results = await getUsers(dbClient, logger);
    res.status(results.status).json({ ...results });
  });

  router.get('/users/:username', async (req, res) => {
    const results = await getUserByUsername(dbClient, req.params.username, logger);
    res.status(results.status).json({ ...results });
  });

  router.post('/users', async (req, res) => {
    const results = await createUser(dbClient, req.body, logger);
    res.status(results.status).json({ ...results });
  });

  app.use('/api', router);
  
  app.listen(port, () => logger.info(`Server launched on http://localhost:${port}`));
};

server(app, router, port, logger, dbClient);

