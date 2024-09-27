import express from "express";
import bodyParser  from "body-parser";
import path from 'path';
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req,res,next)=>{
  const formData = req.body;
  res.send(formData.street+formData.pet);
  next();
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
