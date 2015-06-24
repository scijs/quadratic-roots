'use strict'

var sign = require('signum')

module.exports = quadRoots

// Compute the real roots of the polynomial
//
//      2
//   a x  + b x + c  =  0
//

function quadRoots( a, b, c ) {

  if( a === 0 ) {
    if( b === 0 ) {
      if( c === 0 ) {
        return [];
      } else {
        return [];
      }
    } else {
      return [-c/b]
    }
  }

  var d = b*b - 4*a*c

  if( d < 0 ) {
    return [];
  }

  if( d === 0 ) {
    var r = -0.5 * b/a;
    return [r,r]
  }

  var q = -0.5 * ( b + sign(b) * Math.sqrt(d) )

  return [q/a, c/q]
}


