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
  expense: {
    type: Number,
    required: true
  },
  totalAmount: {
    type: Number,
    require: false
  }
})
module.exports = mongoose.model('ExpenseList', expenseListSchema)