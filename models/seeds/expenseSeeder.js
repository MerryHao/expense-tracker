const mongoose = require('mongoose')
const Expense = require('../expense')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  Expense.create({name: 'lunch', date: '', category: 'Chinese', amount: 250})
  console.log('done')
})