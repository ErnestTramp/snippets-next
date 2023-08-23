const sqlite3 = require("sqlite3").verbose();

export const db = new sqlite3.Database(
  "./var/app.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.log("Getting error: " + err);
      exit(1);
    }
  }
);
