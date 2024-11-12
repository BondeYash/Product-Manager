
const express = require('express')
const app = express()
const port = 3000
const productRouter = require('./routes/productRouter')


const db = require ('./config/db')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api' , productRouter )

db()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
