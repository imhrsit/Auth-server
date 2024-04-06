const express = require("express");
const connectToMongoDB = require("./connect");
const bodyParser = require('body-parser')
const app = express();
const cors = require("cors")
const port = 8000
const userRoute = require("./routes/user");

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())

connectToMongoDB("mongodb://127.0.0.1:27017/auth").then(() => console.log("MongoDB Connected"));

app.set("view engine", "ejs");

app.use("/", userRoute);

app.get("/home", (req, res) => {
    return res.end("Hello from Home Page");
});

app.listen(port, () => console.log("server started"));
