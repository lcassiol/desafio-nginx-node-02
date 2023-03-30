import express from "express";
import {createConnection, insertName, getAllNames, closeConnection} from "./database/index.js";
import { generateName } from "./randomNames/index.js";

const app = express();
const port = 3000;

// create table people(id int not null auto_increment, name varchar(255), 
// primary key(id));

createConnection();

process.on("exit", () => closeConnection());

app.get("/", async (req, res) => {
  const randomName = await generateName();
  await insertName(randomName);
  const people = await getAllNames();
  res.send(`<h1>Full Cycle</h1>
            <ul>${people.map(people => `<li>${people.name}</li>`).join("")}</ul>`);
});

app.listen(port, () => {
  console.log(`App is running! PORT: ${port}`)
});