import * as R from 'ramda';

import { buildResponse, buildError } from '../../utils';
import { validateSchema } from '../../schema';

const updateUser = async (pool, userNameParams, body, logger) => {
  const { lastName, firstName, userName } = body;

  try {
    if (!await validateSchema(body)) {
      return buildError(
        500,
        R.pipe(
          R.head,
          R.prop('message')
        )(validateSchema.errors)
      );
    };

    const results = await pool.query(
      `
        UPDATE users 
        SET 
          lastName = $1, 
          firstName = $2, 
          userName = $3
        WHERE userName = $4 RETURNING *`,
      [lastName, firstName, userName, userNameParams]
    );
    logger.info(`updateUser performed: ${JSON.stringify(results.rows, null, 2)}`);
    if (R.isEmpty(results.rows)) return buildError(404, 'User not found, or no changes to update.');
    return buildResponse(200, results.rows);
  } catch (err) {
    logger.error(`Error during updateUser, ${err}`);
    return buildError(500, err.message);
  }
};

export default updateUser;
