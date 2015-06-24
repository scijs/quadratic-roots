'use strict'

var assert = require('chai').assert,
    roots = require('../lib')


describe( "quadratic-roots", function() {

  it("0 = 0             ( roots: [] )",function() {
    assert.deepEqual( roots(0,0,0), [] )
  })

  it("6 = 0             ( roots: [] )",function() {
    assert.deepEqual( roots(0,0,6), [] )
  })

  it("2x + 6 = 0        ( roots: [-3] )",function() {
    assert.deepEqual( roots(0,2,6), [-3] )
  })

  it("x + x - 12 = 0    ( roots: [-4, 3] )",function() {
    assert.deepEqual( roots(1,1,-12), [-4,3] )
  })

  it("x^2 - 4x + 4 = 0  ( roots: [2, 2] )", function() {
    assert.deepEqual( roots(1,-4,4), [2,2])
  })

  it("x^2 + 1 = 0       ( roots: [] )", function() {
    assert.deepEqual( roots(1,0,1), [])
  })

})
