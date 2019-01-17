const express = require('express')
const router = express.Router()

const AnimalController = require('../controllers/AnimalController')

router.get('/', AnimalController.getAllAnimals)
router.post('/', AnimalController.addAnimal)

router
  .route('/:id')
  .get(AnimalController.getAnimalById)
  .put(AnimalController.updateAnimalById)
  .delete(AnimalController.deleteAnimalById)

module.exports = router
