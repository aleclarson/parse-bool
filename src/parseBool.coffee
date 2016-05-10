
truthy = [
  "true"
  "yes"
  "y"
  "1"
]

falsy = [
  "false"
  "no"
  "n"
  "0"
]

inArray = require "in-array"

module.exports = (string) ->
  return yes if inArray truthy, string
  return no if inArray falsy, string
  null
