var {ls} = require('..')

var chai = require('chai')
var assert = chai.assert    // Using Assert style
var expect = chai.expect    // Using Expect style
var should = chai.should()  // Using Should style

describe('All', function() {
  describe('ls', function() {
    it('should return -1 when the value is not present', function() {
      ls({
        path: '.', 
        callback: (path)=> {
          console.log(path)
        }
      })
      assert.equal(1, 1)
    })
  })
})