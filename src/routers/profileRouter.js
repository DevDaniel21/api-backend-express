import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  const dados = req.body
  res.json({
    message: "Profile has created successfully!",
    profile: dados
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  res.json({message: `Data of profile with id:${id} has been taken successfully!`})
})


router.put('/:id', (req, res) => {
  const id = req.params.id
  const dados = req.body
  res.json({
    message: `Profile with id:${id} has updated successfully!`,
    profile: dados
  })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  res.json({message: `Profile with id:${id} has deleted successfully!`})
})

export default router