const express = require('express')
const cors = require('cors')
const app = express()
const port = 4200

app.use(cors())

app.get('/', (req, res) => {
  console.log('got', req.url)

  setTimeout( () => {
    if (Math.random() < 0.5) {
      res.status(504)
      res.send('BAD GATEWAY')
    } else {
      res.status(200)
      res.json({})
    }
  }, 2000)
})

app.patch('/', (req, res) => {
  console.log('got', req.url)
  res.status(502)
  res.send('BAD GATEWAY')
})

app.delete('/', (req, res) => {
  console.log('got', req.url)
  res.status(502)
  res.send('BAD GATEWAY')
})

app.post('/', (req, res) => {
  res.status(504)
  res.send('BAD GATEWAY')

  // setTimeout( () => {
  //   res.status(504)
  //   res.send('BAD GATEWAY')
  // }, 5000)
  // res.json({ test: 'response', field_2: 50000 })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
