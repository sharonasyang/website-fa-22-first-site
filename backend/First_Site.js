const express = require("express");
const mongoose = require("mongoose");
const { request } = require("http");
const { stringify } = require("querystring");
const app = express();
const router = express.Router();
router.get("/foods", (req, res) => {
    const foods = userschema.find();
    res.send(foods)

} )

router.post('/foods', (req, res) => {
    let stu = new schema ( {
        name: req.body.name,
        price: req.body.price
    })
    const newstu = stu.save()
    res.send(newstu)
})

app.use(router)

const userschema = mongoose.Schema (
    {
        name: String,
        price: Number
    }
)

const schema = mongoose.model("User", userschema)

mongoose.connect('mongodb://localhost.27017/website', () => {
    console.log('success')
})

app.listen(8080, () => {
    console.log("connected")
})


