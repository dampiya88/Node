import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.get("/", (req, res, next)=>{
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
  next();
})

app.get("/", (req, res) => {
  console.log("Mid 2")
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
