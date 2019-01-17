const express = require('express')
const router = express.Router()

let books = [
  { id: 1, title: 'The Wicked King' },
  { id: 2, title: 'The Lord of the Rings' }
]

router
  .route('/')
  .get((req, res) => {
    res.json({ books })
  })
  .post((req, res) => {
    books.push({ id: books.length, title: req.body.title })

    res.json({ books })
  })

router
  .route('/:id')
  .get((req, res) => {
    const book = books.find(book => book.id === parseInt(req.params.id))

    res.json({ book })
  })
  .put((req, res) => {
    const updatedBooks = books.filter(book => {
      if (book.id === parseInt(req.params.id)) {
        return Object.assign(book, req.body)
      } else {
        return book
      }
    })

    books = updatedBooks

    res.json({ books })
  })
  .delete((req, res) => {
    const updatedBooks = books.filter(
      book => book.id !== parseInt(req.params.id)
    )

    books = updatedBooks

    res.json({ books })
  })

module.exports = router
