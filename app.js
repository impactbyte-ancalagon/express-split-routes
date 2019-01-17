const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/cars/', require('./routes/cars')) // old
app.use('/api/books/', require('./routes/books')) // new
app.use('/api/animals/', require('./routes/animals')) // controller

app.listen(3000, () => console.log(3000))
