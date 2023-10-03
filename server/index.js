const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const userRoute = require("./routes/user.routes")

const db = require('./model/index');

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user",userRoute)

app.listen(port, ()=> {
console.log(`listening on ${port}`);
});