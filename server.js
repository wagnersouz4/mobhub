/* eslint-env node */

// ------------------------------------------------------------------------------
// hello world app is based on node.js starter application for Bluemix
// ------------------------------------------------------------------------------
var path = require('path')

var compression = require('compression')
var history = require('connect-history-api-fallback')

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express')

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv')
var request = require('request')

// create a new express server
var app = express()

// Fallback to index.html for because we're using the HTML 5 history API (https://router.vuejs.org/en/essentials/history-mode.html)
app.use(history())

// compress all responses
app.use(compression())

// serve the files out of ./dist as our main files
app.use(express.static(path.resolve(__dirname, 'dist')))

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv()
console.info('appEnv port:', appEnv.port)

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function () {
  // print a message when the server starts listening
  console.log('server starting on ' + appEnv.url)
})
