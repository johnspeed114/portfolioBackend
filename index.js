const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/hello', (req, res) => {
  res.json({ hello: 'Hello World!' })
})
const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
