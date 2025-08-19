import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  const dados = req.body
  res.json({
    message: "Car has created successfully!",
    car: dados
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  res.json({message: `Data of car with id:${id} has been taken successfully!`})
})


router.put('/:id', (req, res) => {
  const id = req.params.id
  const dados = req.body
  res.json({
    message: `${dados.marca} ${dados.modelo} com id ${id} alterado!`,
    marca: dados.marca,
    modelo: dados.modelo
  })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  res.json({message: `Car with id:${id} has deleted successfully!`})
})

export default router