const setupDB = async (pool, logger) => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL
      );
      INSERT INTO users (id, firstName, lastName)
      VALUES (1, 'John', 'Doe'), (2, 'Marie', 'Cross') 
      ON CONFLICT DO NOTHING;
    `);
    logger.info('Table sucessfuly created');
  } catch (err) {
    logger.error(`Error during setup of the database, ${err}`);
  }
};

export default setupDB;
