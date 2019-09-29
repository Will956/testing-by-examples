import express from 'express';

import logger from './logger';
import initDb from './db';
import { setupDB, getUsers } from './db/queries';

const app = express();
const router = express.Router();
const port = 3000;
const dbClient = initDb('localhost', 'api_db', 5432, 'admin', 'password');

const server = async (app, router, port, logger, dbClient) => {
  await setupDB(dbClient, logger);

  router.use(function (req, res, next) {
    logger.info(`${req.method} on ${req.path}`);
    next();
  })
  
  router.get('/', (req, res) => res.json({ message: 'Running' }));

  router.get('/users', async (req, res) => {
    const results = await getUsers(dbClient, logger);
    res.status(results.status).json({ ...results });
  });

  app.use('/api', router);
  
  app.listen(port, () => logger.info(`Server launched on http://localhost:${port}`));
};

server(app, router, port, logger, dbClient);

