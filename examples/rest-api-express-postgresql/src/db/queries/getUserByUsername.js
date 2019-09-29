import * as R from 'ramda';
import { buildResponse, buildError } from '../../utils';

const getUserByUsername = async (pool, username, logger) => {
  try {
    const results = await pool.query(
      'SELECT * FROM users WHERE userName = $1',
      [username]
    );
    logger.info(`getUser performed: ${JSON.stringify(results.rows, null, 2)}`);
    if (R.isEmpty(results.rows)) return buildError(404, 'User not found.');
    return buildResponse(200, results.rows);
  } catch (err) {
    logger.error(`Error during getUsers, ${err}`);
    return buildError(500, err.message);
  }
};

export default getUserByUsername;
