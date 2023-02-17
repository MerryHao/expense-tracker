const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
router.get('/', (req, res) => {
  const userId = req.user._id
  Record.find({ userId })
    .lean()
    .then(records => {
      let totalAmount = 0
      for(let i = 0; i < records.length; i++) {
        totalAmount += records[i].amount
      }
      return res.render('index', { records, totalAmount })
    })
    .catch(error => console.log(error))
})
module.exports = router