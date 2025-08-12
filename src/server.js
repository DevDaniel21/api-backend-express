import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

// CRUD profile
app.post('/profile', (req, res) => {
  const dados = req.body
  res.json({
    message: "Profile has created successfully!",
    profile: dados
  })
})

app.get('/profile', (req, res) => {
  res.json({message: "Data of profile has been taken successfully!"})
})

app.put('/profile', (req, res) => {
  const dados = req.body
  res.json({
    message: "Profile has updated successfully!",
    profile: dados
  })
})

app.delete('/profile', (req, res) => {
  res.json({message: "Profile has deleted successfully!"})
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Use Ctrl+C para desligar o servidor')
})
