import { db } from "@/database";
import { uuid } from "uuidv4";

export default function SaveSnippet(language, codeValue) {
  const id = uuid();
  db.run(
    "INSERT INTO snippets id = ? language = ?, code = ?",
    [id, language, codeValue],
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
}
