const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const routes = require('./routes')
const PORT = process.env.PORT || 3000
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

require('./config/mongoose')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.listen(PORT, (res, req) => {
  console.log(`Express is listen on http://localhost:${PORT}`)
})