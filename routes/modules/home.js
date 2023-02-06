const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')
router.get('/', (req, res) => {
  Expense.find()
    .lean()
    .then(expenses => res.render('index', { expenses}))
    .catch(error => console.log(error))
})
module.exports = router