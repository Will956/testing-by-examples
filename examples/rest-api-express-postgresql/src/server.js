import express from 'express';

import logger from './logger';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => logger.info(`Server launched on http://localhost:${port}`));
