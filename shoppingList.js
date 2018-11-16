const express = require("express");
const shoppingList = express.Router();

const items = [
    {
        id: 0,
        product: "turkey",
        price: 50,
        quantity: 3
    },
    {
        id: 1,
        product: "stuffing",
        price: 17,
        quantity: 1
    },
    {
        id: 2,
        product: "dressing",
        price: 23,
        quantity: 2
    },
    {
        id: 3,
        product: "mashed potatotes",
        price: 2,
        quantity: 1
    }
];

shoppingList.get("/shoppingList", (req, res) => {
    res.json(items);
})

// shoppingList.post("/shoppingList", (req, res) => {
//     console.log(req.body);
//     items.push(req.body)
//     res.json(items);
//     console.log("test")
// })

// shoppingList.delete("/shoppingList/:id", (req, res) => {
//     // console.log(req.body);
//     console.log(req.params.id);
//     items.splice(req.params.id, 1)
//     res.json(items);
// })

// shoppingList.put("/shoppingList/:id", (req, res) => {
//     console.log(req.body);
//     items[req.params.id] = req.body;
//     res.json(items)
// })

module.exports = shoppingList