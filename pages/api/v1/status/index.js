import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const databaseConsultVersion = await database.query("SHOW server_version");
  const databaseMaxConnections = await database.query("SHOW max_connections");
  const databaseActivityConnections = await database.query(
    "SELECT count(1),state FROM pg_stat_activity GROUP BY state",
  );
  response.status(200).json({
    updated_at: updatedAt,
    database_version: databaseConsultVersion.rows[0].server_version,
    database_max_connections: databaseMaxConnections.rows[0].max_connections,
    database_connections: databaseActivityConnections.rows[1].count,
  });
}

export default status;
