const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send(`
    <h1>hello Phuong Dien<h1/>
  
  `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})