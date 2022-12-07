const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

const programme = require('./data/programme.json')

app.use(cors())

app.get('/', (req, res)=>{
    
    res.send('anis setup server side')
})

app.get('/programming-languages', (req, res)=>{
    
    res.send(programme)
})

app.listen(port, ()=>{
    console.log(`server side practice ${port}`)

})