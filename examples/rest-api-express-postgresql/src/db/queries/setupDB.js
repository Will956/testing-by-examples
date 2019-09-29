const setupDB = async (pool, logger) => {
  try {
    await pool.query(`
      DROP TABLE IF EXISTS users CASCADE;
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        userName TEXT NOT NULL UNIQUE
      );
      INSERT INTO users (firstName, lastName, userName)
      VALUES ('John', 'Doe', 'JohnDoe45'), ('Marie', 'Cross', 'Cross102') 
      ON CONFLICT DO NOTHING;
    `);
    logger.info('Table sucessfuly created');
  } catch (err) {
    logger.error(`Error during setup of the database, ${err}`);
  }
};

export default setupDB;
