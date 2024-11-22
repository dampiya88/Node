import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import Swal from "sweetalert2";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client(
  {
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "PostGres@418",
    port: 5432,
  }
)
db.connect(
  (err) => {
    console.log(Error, err)
  }
);


app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const { username, password } = await req.body;
  const newData = { value1: username , value2: password };
  try{
    createUser(newData);
  }catch{
    return res.redirect('/'); // Redirect to home page
  }
});

const createUser = async (data) => { 
  const query = {
    text: 'INSERT INTO users(email, password) VALUES($1, $2) RETURNING *', // Use placeholders
    values: [data.value1, data.value2], // Data to insert
  };

  try {
    const res = await db.query(query);
    if (res.rowCount > 0 && res.rows.length > 0) {
      console.log(res.rows[0]); 
    }
  } catch (error) {
    console.error('Error saving data:', error.detail);
  } finally {
    await db.end(); // Close the database connection
  }
};

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try{
    loginCheck(username ,password);
  }catch{
    return res.status(401).send({ message: "Invalid username or password" });
  }
});

const checkUserExistance = async (email) =>{
  const query = {
    text: 'SELECT * FROM users WHERE email = $1', // Use placeholders
    values: [email]
  }
  const res = await db.query(query);
  if (res.rowCount > 0) {
    Swal.fire({
      title: 'Error!',
      text: `The email ${email} already exist.`,
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }
}

const loginCheck = async (email,password) => {
  const query = {
    text: 'SELECT * FROM users WHERE email = $1 AND password =$2', // Use placeholder for the email
    values: [email,password], // Data to match
  };

  try {
    const res = await db.query(query);
    console.log(res);
    if (res.rowCount > 0) {
      console.log('User found:', res.rows[0]); // Access the first row of results
      return res.status(200).send({ message: "Logged in successfully" });
    } else {
      return res.status(200).send({ message: "Logging in failed" });
    }
  } catch (err) {
    console.error('Error reading data:', err);
  } finally {
    await db.end(); // Close the database connection
  }
};

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
