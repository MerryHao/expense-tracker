const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')
router.get('/new', (req, res) => {
  res.render('new')
})
router.post('/', (req, res) => {
  Expense.create(req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
module.exports = router