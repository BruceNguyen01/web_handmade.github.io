const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const userRouter = require('./routes/homepage')

app.get('/', (req, res) => {
  res.render('index') // index refers to index.ejs
})

app.get('/login', (req, res) => {
  res.render('login') // index refers to index.ejs
})

app.get('/product-detail', (req, res) => {
  res.render('product-detail') // index refers to index.ejs
})
