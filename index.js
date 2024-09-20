require('dotenv').config()
const express = require('express') 
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World! Deepak')
})



app.get('/insta', (req, res)=>{
    res.send('deepak127')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Please login here</h1>')
})

app.get('/youtube', (req, res)=>{
    res.send('<h2>Youtube</h2>')
})
 

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})