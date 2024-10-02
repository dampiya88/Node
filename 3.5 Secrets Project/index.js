//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
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
const authorized = false;

app.post("/check", (req,res)=>{
    const formData = req.body;
    if("ILoveProgramming"=== formData.password){
        res.sendFile(path.join(__dirname, 'public/secret.html'));
    }else{
        res.sendFile(path.join(__dirname, 'public/index.html'));
    }
})
