const express = require('express')
const cors = require('cors')

const app = express()

var corOption = {
    origin: 'http://localhost:4000'
}

// Middleware

app.use(cors(corOption))

app.use(express.json())

app.use(express.urlencoded({extends: true}))

// routers

const productRouter = require('./routes/productRoute')
app.use('/api/products', productRouter)


// Testing API

app.get('/', (req,res)=>{
    res.json({message: "Hello"})
})

// Port
const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT)
})

