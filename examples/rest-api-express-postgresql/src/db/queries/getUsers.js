const getUsers = async (pool, response, logger) => {
  try {
    const results = await pool.query('SELECT * FROM users ORDER BY id ASC');
    response.status(200).json({
      status: 200,
      data: results.rows
    });
    logger.info('getUsers performed');
  } catch (err) {
    response.status(500).json({
      status: 500,
      message: err.message
    });
    logger.error(`Error during getUsers, ${err}`);
  }
};

export default getUsers;
