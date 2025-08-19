import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  const dados = req.body
  res.json({
    message: "Product has created successfully!",
    product: dados
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  res.json({message: `Data of product with id:${id} has been taken successfully!`})
})


router.put('/:id', (req, res) => {
  const id = req.params.id
  const dados = req.body
  res.json({
    message: `Product with id:${id} has updated successfully!`,
    product: dados
  })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  res.json({message: `Product with id:${id} has deleted successfully!`})
})

export default router