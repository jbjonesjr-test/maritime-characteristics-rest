var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var routes = require('./api/routes/vesselRoutes') // importing route
routes(app) // register the route

/*
Lambda doesn't listen on a port, API_GATEWAY handles it
app.listen(port)
*/

console.log('vessel characteristics RESTful API server started on: ' + port)

// Lambda has the app being the entry point
 module.exports = app
