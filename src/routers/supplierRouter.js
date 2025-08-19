import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  const dados = req.body
  res.json({
    message: "Supplier has created successfully!",
    supplier: dados
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  res.json({message: `Data of supplier with id:${id} has been taken successfully!`})
})


router.put('/:id', (req, res) => {
  const id = req.params.id
  const dados = req.body
  res.json({
    message: `Supplier with id:${id} has updated successfully!`,
    supplier: dados
  })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  res.json({message: `Supplier with id:${id} has deleted successfully!`})
})

export default router