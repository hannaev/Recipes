const express = require("express")
const mongoose = require('mongoose');

const app = express()
const port = 3000

const url = "mongodb://localhost:27017"


let db, trips, expenses


app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//Connect to database

mongoose.connect('mongodb+srv://hannaev2405:MTrnhg.S9mC@R.F@cluster0.dnu7d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => {
  console.log("connected to db")
})


let adminLogin = mongoose.model('sample_analytics.accounts', adminLogin);
