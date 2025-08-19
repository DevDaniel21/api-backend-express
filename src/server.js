import express from 'express'
import profileRouter from './routers/profileRouter.js'
import productRouter from './routers/productRouter.js'
import supplierRouter from './routers/supplierRouter.js'
import carRouter from './routers/carRouter.js'

const app = express()
const port = 3000

app.use(express.json()) // Converter o JSON que chegou na requisição em um objeto js e vai salvar no req.body

app.use('/profile', profileRouter)
app.use('/product', productRouter)
app.use('/supplier', supplierRouter)
app.use('/car', carRouter)

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`)
})
