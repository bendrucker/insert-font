'use strict'

var pipe = require('value-pipe')
var toCss = require('to-css')
var partial = require('ap').partial
var pair = require('object-pair')
var format = require('simple-format')
var dataUri = require('create-data-uri')

module.exports = pipe(createFace, partial(pair, '@font-face'), toCss)

function createFace (data) {
  return {
    'font-family': data.family,
    src: createSrc(data.font),
    'font-style': 'normal',
    'font-weight': data.weight
  }
}

function createSrc (font) {
  return format(
    "url(%s) format('woff')",
    dataUri({type: 'application/font-woff', charset: 'utf-8'}, font)
  )
}
