import path from "path"
import fs from "fs";
const { promisify } = require("util");

const readFile = promisify(fs.readFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function userHandler(req, res) {
  const id = parseInt(req?.query?.id);
  const jsonFile = path.resolve("./", "users.json");
  const readFileData = await readFile(jsonFile);
  await delay(1000);
  const users = JSON.parse(readFileData).users;
  const user = users.find((rec) => rec.id === id);
  if (user) {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(user);
  } else {
    res.status(404).send("user not found");
  }
  console.log(`GET /api/users/${id} status: 200`);
}
