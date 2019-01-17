const express = require('express')
const router = express.Router()

let cars = [{ id: 1, title: 'Angkot' }, { id: 2, title: 'Audi' }]

router.get('/', (req, res) => {
  res.json({ cars })
})

router.post('/', (req, res) => {
  cars.push({ id: cars.length, title: req.body.title })

  res.json({ cars })
})

router.get('/:id', (req, res) => {
  const car = cars.find(car => car.id === parseInt(req.params.id))

  res.json({ car })
})

router.put('/:id', (req, res) => {
  const updatedCars = cars.filter(car => {
    if (car.id === parseInt(req.params.id)) {
      return Object.assign(car, req.body)
    } else {
      return car
    }
  })

  cars = updatedCars

  res.json({ cars })
})

router.delete('/:id', (req, res) => {
  const updatedCars = cars.filter(car => car.id !== parseInt(req.params.id))

  cars = updatedCars

  res.json({ cars })
})

module.exports = router
