const test = require('tape')
const storage = require('../')

test('Should be an object', t => {
  t.ok(storage, 'should exists')
  t.equals(typeof storage, 'object', 'should be an object')
  t.equals(typeof storage.saveData, 'function', 'should be a saveData function')
  t.equals(typeof storage.getData, 'function', 'should be a getData function')
  t.equals(typeof storage.reset, 'function', 'should be a reset function')
  t.end()
})
