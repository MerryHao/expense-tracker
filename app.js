const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

require('./config/mongoose')

app.get('/', (req, res) => {
  res.send('hi')
})

app.listen(PORT, (res, req) => {
  console.log(`Express is listen on http://localhost:${PORT}`)
})