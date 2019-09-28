import express from 'express';

import logger from './logger';
import initDb from './db';
import { setupDB, getUsers } from './db/queries';

const app = express();
const port = 3000;
const dbClient = initDb('localhost', 'api_db', 5432, 'admin', 'password');

const server = async (app, port, logger, dbClient) => {
  await setupDB(dbClient, logger);
  
  app.get('/', (req, res) => res.json({ message: 'Running' }));

  app.get('/users', (req, res) => getUsers(dbClient, res, logger));
  
  app.listen(port, () => logger.info(`Server launched on http://localhost:${port}`));
};

server(app, port, logger, dbClient);

