const mongoose = require('mongoose')
const Schema = mongoose.Schema
const expenseListSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  category: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
})
module.exports = mongoose.model('ExpenseList', expenseListSchema)