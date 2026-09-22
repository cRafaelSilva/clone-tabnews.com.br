test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  expect(response.status).toBe(200);
});

test("GET database last update", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();

  expect(responseBody.updated_at).toBeDefined();
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
});

test("GET database version", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();

  expect(responseBody.database_version).toBeDefined();
  const databaseVersion = Number(responseBody.database_version);
  expect(databaseVersion).not.toBeNaN();
});

test("GET database max connections", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();

  expect(responseBody.database_max_connections).toBeDefined();
  expect(Number(responseBody.database_max_connections)).not.toBeNaN();
});

test("Get database activity connections", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();

  expect(responseBody.database_connections).toBeDefined();

  const databaseActivityConnections = Number(responseBody.database_connections);
  expect(databaseActivityConnections).not.toBeNaN();
  expect(String(databaseActivityConnections)).toEqual(
    responseBody.database_connections,
  );
});
