const express = require('express')
const app = express()
const port = 3000

app.get('/index.html',(req,res) => {
    res.send('Its Working!')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })