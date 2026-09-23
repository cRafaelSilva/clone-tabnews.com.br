import { Pool } from "pg";

async function query(queryObj) {
  const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    masLifetimeSeconds: 60,
  });

  //await pool.connect();
  const result = await pool.query(queryObj);
  //await pool.end();
  return result;
}

export default {
  query: query,
};
