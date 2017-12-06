
const {test} = require('testpass')

const parseBool = require('.')

const truthy = {
  'true': true,
  'tru': null,
  't': null,
  'yes': true,
  'y': true,
  '1': true,
}

const falsy = {
  'false': false,
  'fals': null,
  'f': null,
  'no': false,
  'n': false,
  '0': false,
}

const groups = {truthy, falsy}

for (const name in groups) {
  test(name, (t) => {
    const group = groups[name]
    for (const value in group) {
      const expected = group[value]
      t.eq(parseBool(value), expected)
    }
  })
}

