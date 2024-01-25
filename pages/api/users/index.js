import path from "path";
import fs from "fs";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req, res) {
  const method = req?.method;
  const jsonFile = path.resolve("./", "users.json");
  const readFileData = await readFile(jsonFile);
  const users = JSON.parse(readFileData).users;
  await delay(1000);

  switch (method) {
    case "GET":
      try {
        if (!users) {
          res.status(404).send("Error: Request failed with status code 404");
        } else {
          res.setHeader("Content-Type", "application/json");
          res.status(200).send(JSON.stringify(users, null, 2));
          console.log("GET /api/users  status: 200");
        }
      } catch (e) {
        console.log("/api/users error:", e);
      }
      break;

    case "POST":
      try {
        const recordFromBody = req?.body;
        recordFromBody.id = Math.max(...users.map((h) => h.id)) + 1;
        const newUsersArray = [...users, recordFromBody];
        writeFile(
          jsonFile,
          JSON.stringify(
            {
              users: newUsersArray,
            },
            null,
            2
          )
        );
        res.status(200).json(recordFromBody);
        console.log(`POST /api/users status: 200`);
      } catch (e) {
        console.log("/api/users POST error:", e);
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
