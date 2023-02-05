const mongoose = require('mongoose')
const Schema = mongoose.Schema
const expenseListSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})
module.exports = mongoose.model('ExpenseList', expenseListSchema)