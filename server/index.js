const express = require('express');
const cors = require('cors');
const userRoute = require("./routes/user.routes")
const productsRoute = require("./routes/product.routes")
const categoriesRoute = require("./routes/categories.routes")
require('./model/index');

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute)
app.use("/api/products", productsRoute)
app.use("/api/categories", categoriesRoute)

app.listen(port, ()=> {
console.log(`listening on ${port}`);
});