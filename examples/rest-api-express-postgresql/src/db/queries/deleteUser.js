import * as R from 'ramda';
import { buildResponse, buildError } from '../../utils';

const deleteUser = async (pool, userName, logger) => {
  try {
    const results = await pool.query(
      'DELETE FROM users WHERE userName = $1',
      [userName]
    );
    logger.info(`deleteUser performed: ${JSON.stringify(results.rows, null, 2)}`);
    console.log(results);
    if (R.equals(results.rowCount, 0)) return buildError(404, 'User not found.');
    return buildResponse(200, results.rows);
  } catch (err) {
    logger.error(`Error during deleteUser, ${err}`);
    return buildError(500, err.message);
  }
};

export default deleteUser;
