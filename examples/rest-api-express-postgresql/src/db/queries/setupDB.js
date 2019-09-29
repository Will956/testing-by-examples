const setupDB = async (pool, logger) => {
  try {
    await pool.query(`
      DROP TABLE IF EXISTS users CASCADE;
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        userName TEXT NOT NULL
      );
      INSERT INTO users (id, firstName, lastName, userName)
      VALUES (1, 'John', 'Doe', 'JohnDoe45'), (2, 'Marie', 'Cross', 'Cross102') 
      ON CONFLICT DO NOTHING;
    `);
    logger.info('Table sucessfuly created');
  } catch (err) {
    logger.error(`Error during setup of the database, ${err}`);
  }
};

export default setupDB;
