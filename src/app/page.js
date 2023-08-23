import Header from "./components/Header";
import { db } from "@/database";

function getAllSnippets(callback) {
  db.all("SELECT * FROM snippets", function (err, rows) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, rows);
    }
  });
}

export default async function Home() {
  try {
    var snippets = await new Promise((resolve, reject) => {
      getAllSnippets((err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });

    return (
      <>
        <Header />
        <main>
          <div className="snippets-wrapper">
            {snippets.map((snippet) => (
              <div key={snippet.id} className="snippet">
                <div className="snippet-header">
                  <p>{snippet.language}</p>
                </div>
                <div className="snippet-code">
                  <div className="code">{snippet.code}</div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </>
    );
  } catch (error) {
    console.error("Error:", error);
    // Handle the error gracefully in your UI
  }
}
