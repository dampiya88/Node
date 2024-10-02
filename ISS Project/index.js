import express from "express";
import bodyParser  from "body-parser";
import path from 'path';
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use(bodyParser.urlencoded({ extended: true }));

fetch('https://api.wheretheiss.at/v1/satellites/')
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        console.log(data[0].id);  // Do something with the data
        return JSON.stringify(fetch(`https://api.wheretheiss.at/v1/satellites/${data[0].id}`))
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
