import { db } from "@/database";
import { v4 as uuidv4 } from "uuid";

export default (req, res) => {
  if (req.method === "POST") {
    const { code, language } = req.body;

    const id = uuidv4();

    console.log(
      "YESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS"
    );

    db.run(
      "INSERT INTO snippets (id, code, language) VALUES (?, ?, ?)",
      [id, code, language],
      function (err) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.json({ id, code, language });
      }
    );
  }
};
