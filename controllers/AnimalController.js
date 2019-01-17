let animals = [{ id: 1, name: 'Ayam' }, { id: 2, name: 'Jenglot' }]

exports.getAllAnimals = (req, res) => {
  res.json({ animals: animals }) // old
}

exports.addAnimal = (req, res) => {
  animals.push({ id: animals.length, name: req.body.name })

  res.json({ animals }) // new
}

exports.getAnimalById = (req, res) => {
  const animal = animals.find(animal => animal.id === parseInt(req.params.id)) // new

  res.json({ animal })
}

exports.updateAnimalById = (req, res) => {
  const updatedAnimals = animals.filter(animal => {
    if (animal.id === parseInt(req.params.id)) {
      return Object.assign(animal, req.body)
    } else {
      return animal
    }
  }) // old

  animals = updatedAnimals

  res.json({ animals })
}

exports.deleteAnimalById = (req, res) => {
  const updatedAnimals = animals.filter(
    animal => animal.id !== parseInt(req.params.id)
  ) // new

  animals = updatedAnimals

  res.json({ animals })
}
