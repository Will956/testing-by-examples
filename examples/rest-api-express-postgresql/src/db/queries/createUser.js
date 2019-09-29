import * as R from 'ramda';

import { buildResponse, buildError } from '../../utils';
import { validateSchema } from '../../schema';

const createUser = async (pool, body, logger) => {
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
      'INSERT INTO users (lastName, firstName, userName) VALUES ($1, $2, $3) RETURNING *',
      [lastName, firstName, userName]
    );
    logger.info(`createUser performed: ${JSON.stringify(results.rows, null, 2)}`);
    return buildResponse(201, results.rows);
  } catch (err) {
    logger.error(`Error during createUser, ${err}`);
    if (R.prop('code', err) === '23505') return buildError(409, err.detail);
    return buildError(500, err.message);
  }
};

export default createUser;
