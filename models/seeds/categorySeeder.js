const Category = require('../category')
const categoryItem = [
  {
    id: 1,
    name: '家居物業'
  },
  {
    id: 2,
    name: '交通出行'
  },
  {
    id: 3,
    name: '休閒娛樂'
  },
  {
    id: 4,
    name: '餐飲食品'
  },
  {
    id: 5,
    name: '其他'
  }
]
const db = require('../../config/mongoose')
db.once('open', () => {
  console.log('categorySeeder done !')
  Promise.all(Array.from({ length: 5 }, (_, i) =>
    Category.create({ id: categoryItem[i].id, name: categoryItem[i].name })
  ))
  .then(() => {
    console.log('category created!')
    process.exit()
  })
  .catch(error => console.log(error))
})