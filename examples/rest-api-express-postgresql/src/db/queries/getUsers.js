import { buildResponse, buildError } from '../../utils';

const getUsers = async (pool, logger) => {
  try {
    const results = await pool.query('SELECT * FROM users ORDER BY id ASC');
    logger.info(`getUsers performed: ${JSON.stringify(results.rows, null, 2)}`);
    return buildResponse(200, results.rows);
  } catch (err) {
    logger.error(`Error during getUsers, ${err}`);
    return buildError(500, err.message);
  }
};

export default getUsers;
