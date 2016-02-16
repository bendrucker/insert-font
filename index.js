'use strict'

var flatten = require('flatten')
var insertStyles = require('insert-styles')
var createCss = require('./create')

module.exports = insertFonts

function insertFonts (fonts) {
  var css = flatten(Object.keys(fonts).map(function (family) {
    return Object.keys(fonts[family]).map(function (weight) {
      return createCss({
        family: family,
        weight: weight,
        font: fonts[family][weight]
      })
    })
  }))
  .join('\n')

  insertStyles(css)

  return css
}
