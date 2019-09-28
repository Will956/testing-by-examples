import { Pool } from 'pg';

const initPool = (host, database, port, user, password) => new Pool({ 
  host,
  database,
  port,
  user,
  password
});

export default initPool;
