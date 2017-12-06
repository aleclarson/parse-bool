
const truthy = 'true yes y 1'.split(' ')
const falsy = 'false no n 0'.split(' ')

const inArray = require('in-array')

function parseBool(value) {
  if (typeof value != 'string') {
    throw TypeError('Expected a string')
  }
  if (inArray(truthy, value)) {
    return true
  }
  if (inArray(falsy, value)) {
    return false
  }
  return null
}
