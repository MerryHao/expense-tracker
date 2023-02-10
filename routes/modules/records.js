const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
router.get('/new', (req, res) => {
  return res.render('new')
})
router.post('/', (req, res) => {
  return Record.create(req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
router.get('/:id/edit', (req, res) => {
  const { id }= req.params
  return Record.findById(id)
  .lean()  
  .then(record => res.render('edit', { record }))
  .catch(error => console.log(error))
})
router.put('/:id', (req, res) => {
  const { id } = req.params
  return Record.findByIdAndUpdate(id, req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
module.exports = router