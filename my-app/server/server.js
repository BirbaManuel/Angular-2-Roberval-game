const express = require('express')
const http = require('http')
const app = express()
const logger = require('morgan') // add server log for dev runtime
const chalk = require('chalk') // add some cool color to your log
const bodyParser = require('body-parser') //to do : add multer for more fct in parsing data from request
const assert = require('assert') //library to do unit test
const session = require('express-session') // need this module to use flash
const flash = require('connect-flash') //middleware connect-flash : temporary messages
const config = { port: 8000 }

const urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
app.use(
  session(
    { secret: 'Roberval-game' },
    {
      cookie: { maxAge: 24 * 60 * 60 * 1000 }, //24h valide session
    }
  )
)
app.use(flash())

app.get('/', handleHome)

app.use(function(req, res, next) {
  res.status(404).json({
    error: `sorry your request method
      ${req.method}
       forward
      ${req.originalUrl}
       not match…`,
  })
})

function handleHome(req, res) {
  const msgFashError = req.flash('error')
  msgFashError.length === 0
    ? res.status(200).json({
        titre: 'Welcome The Roberval Game !!!',
        data: [
          { id: 1, poids: 1, titre: 'Roberval-game' },
          { id: 2, poids: 11, titre: 'Roberval-game' },
          { id: 3, poids: 10, titre: 'Roberval-game' },
          { id: 4, poids: 20, titre: 'Roberval-game' },
          { id: 5, poids: 30, titre: 'Roberval-game' },
          { id: 6, poids: 0, titre: 'Roberval-game' },
          { id: 7, poids: 9, titre: 'Roberval-game' },
          { id: 8, poids: 40, titre: 'Roberval-game' },
        ],
      })
    : res.status(500).json({ error: msgFashError })
}

http.Server(app).listen(config.port, function() {
  console.log(
    chalk`{green ✔ Server listening on port} {cyan ${config.port}} !!!`
  )
})
