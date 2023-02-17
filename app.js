const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const routes = require('./routes')
const PORT = process.env.PORT || 3000
const methodOverride = require('method-override')
const session = require('express-session')
const usePassport = require('./config/passport')
const flash = require('connect-flash')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

require('./config/mongoose')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs', helpers: {
  ifEquals: (a, b, options) =>
    String(a) === String(b) ? options.fn(this) : options.inverse(this)
}}))
app.set('view engine', 'hbs')
app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
usePassport(app)
app.use(flash())
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})
app.use(routes)
app.listen(PORT, (res, req) => {
  console.log(`Express is listen on http://localhost:${PORT}`)
})