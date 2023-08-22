const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "./var/app.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.log("Getting error: " + err);
      exit(1);
    }
  }
);

function createTables() {
  db.run(
    `
    CREATE TABLE snippets (
      id TEXT UNIQUE,
      code TEXT,
      language TEXT,
    );
  `,
    (err) => {
      if (err) {
        console.log("Getting error: " + err);
      }
      console.log("Tables created successfully.");
    }
  );
}

createTables();
