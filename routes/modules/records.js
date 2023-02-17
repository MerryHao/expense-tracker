const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
router.get('/search?categoryId=', (req, res) => {
  return res.render('index')
})
router.get('/new', (req, res) => {
  return res.render('new')
})
router.post('/', (req, res) => {
  const userId = req.user._id
  const { name, date, amount, categoryId } = req.body
  return Record.create({ name, date, amount, categoryId, userId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
  .lean()  
  .then(record => res.render('edit', { record }))
  .catch(error => console.log(error))
})
router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const { name, date, amount, categoryId } = req.body
  return Record.findByIdAndUpdate({ _id, userId }, req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
module.exports = router