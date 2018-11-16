
const express = require("express");
const app = express();
const cartList = require("./shoppingList.js");

app.use(express.static("./public"));
app.use(express.json());
app.use("/", cartList);

const port = 3000;
app.listen(port, () => {
    console.log(`server is on port ${port}`);
});


