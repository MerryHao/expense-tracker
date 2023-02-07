const mongoose = require('mongoose')
const Schema = mongoose.Schema
const expenseListSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    require: true
  },
  categoryId: {
    type: Number,
    ref: 'Category',
    index: true,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
})
module.exports = mongoose.model('ExpenseList', expenseListSchema)