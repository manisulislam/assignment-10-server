const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

const programme = require('./data/programme.json')

app.use(cors())

app.get('/', (req, res)=>{
    
    res.send('anis setup server side')
})

app.get('/side/:id', (req, res)=>{

    const sideContentDetails = req.params.id;
    const selectedItems = programme.find(n => n.id=sideContentDetails)
    res.send(selectedItems)
   
})

app.get('/course-details/:id', (req,res)=>{
    const details = req.params.id;
    const selectedNews = programme.find(n =>n.id==details)
    res.send(selectedNews)
})

app.get('/programming-languages', (req, res)=>{
    
    res.send(programme)
})

app.listen(port, ()=>{
    console.log(`server side practice ${port}`)

})