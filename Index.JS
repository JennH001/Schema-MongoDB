require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 2020
const conn = require('./config/db')
conn()

const starterFruits = require('./config/seeds')


const Fruit = require('./models/fruit');

const fruitRoutes = require('./routes/fruitRoutes')

app.use(express.json())
app.use('/api/fruits', fruitRoutes)

// home route
app.get("/", (req, res) => {
  res.send("Home Page!");
});


app.get("/fruits/seeds", async (req, res) => {
  try {
    await Fruit.deleteMany({});
    await Fruit.create(starterFruits);
    res.json(starterFruits);
  } catch (error) {
    console.log(`Something went wrong : ${error.message}`);
  }
});



app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port : ${process.env.PORT}`);
});