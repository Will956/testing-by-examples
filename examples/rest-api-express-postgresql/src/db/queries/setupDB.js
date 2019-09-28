const setupDB = async (pool, logger) => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL
      );
      INSERT INTO users (firstName, lastName)
      VALUES ('John', 'Doe'), ('Marie', 'Cross') 
      ON CONFLICT DO NOTHING;
    `);
    logger.info('Table sucessfuly created');
  } catch (err) {
    logger.error(`Error during setup of the database, ${err}`);
  }
};

export default setupDB;
