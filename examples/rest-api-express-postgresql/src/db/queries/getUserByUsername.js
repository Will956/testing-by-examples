import * as R from 'ramda';
import { buildResponse, buildError } from '../../utils';

const getUserByUsername = async (pool, userName, logger) => {
  try {
    const results = await pool.query(
      'SELECT * FROM users WHERE userName = $1',
      [userName]
    );
    logger.info(`getUserByUsername performed: ${JSON.stringify(results.rows, null, 2)}`);
    if (R.isEmpty(results.rows)) return buildError(404, 'User not found.');
    return buildResponse(200, results.rows);
  } catch (err) {
    logger.error(`Error during getUserByUsername, ${err}`);
    return buildError(500, err.message);
  }
};

export default getUserByUsername;
