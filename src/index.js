const express = require('express')
const path = require('path')
const app = express()
const engine  = require('express-handlebars').engine
const port = 3000

app.use(express.static(path.join(__dirname,'pucblic')))


app.engine('hbs', engine({extname:'.hbs'}));//config tên handlebars thành hbs
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources\\views'))

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
