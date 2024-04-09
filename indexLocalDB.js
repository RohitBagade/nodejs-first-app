import express from "express";
import path from "path";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017", { dbName: "backend" })
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const message = mongoose.model("Message", messageSchema);

const app = express();

const users = [];

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// app.get('/', (req, res) => {
//     res.send('GET request to the homepage');
// })

// app.get('/getproducts', (req, res) => {
//     res.json({
//         success:true,
//         products:[]
//       });
// })

app.get("/", (req, res) => {
  res.render("index", { name: "Bitch" });
});

app.get("/success", (req, res) => {
  res.render("success");
});

// app.get("/add", (req, res) => {
//   message.create({ name: "Abhi", email: "sample@gmail.com" }).then(() => {
//     res.send("Nice");
//   });
// });

app.get("/add", async (req, res) => {
  await message.create({ name: "Abhi2", email: "sample2@gmail.com" });
  res.send("Nice");
});

app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

app.post("/", (req, res) => {
  console.log(req.body);
  users.push({ username: req.body.name, email: req.body.email });
  //console.log(users);
  //res.render("success");
  res.redirect("/success");
});

app.listen(5000, () => {
  console.log("Server is working");
});
