'use strict'

var test = require('tape')
var fs = require('fs')
var insertFonts = require('./')

test(function (t) {
  var expected = fs.readFileSync(__dirname + '/fixture.css', 'utf8').trim()
  var css = insertFonts({
    Face1: {
      400: 'regularFont',
      500: 'boldFont'
    },
    Face2: {
      400: 'secondFace'
    }
  })

  t.equal(css, expected, 'generates css font-faces')

  t.end()
})
