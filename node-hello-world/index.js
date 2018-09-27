const express = require('express')
const app = express()
const port = 4242

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
})

