const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')
router.get('/new', (req, res) => {
  return res.render('new')
})
router.post('/', (req, res) => {
  return Expense.create(req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
router.get('/:id/edit', (req, res) => {
  const { id }= req.params
  return Expense.findById(id)
  .lean()  
  .then(expense => res.render('edit', { expense }))
  .catch(error => console.log(error))
})
router.put('/:id', (req, res) => {
  const { id } = req.params
  return Expense.findByIdAndUpdate(id, req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
module.exports = router