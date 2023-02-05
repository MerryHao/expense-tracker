const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('hi')
})

app.listen(PORT, (res, req) => {
  console.log(`Express is listen on http://localhost:${PORT}`)
})