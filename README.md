# quadratic-roots

[![Build Status](https://travis-ci.org/scijs/quadratic-roots.svg?branch=1.0.0)](https://travis-ci.org/scijs/quadratic-roots) [![npm version](https://badge.fury.io/js/quadratic-roots.svg)](http://badge.fury.io/js/quadratic-roots)


Compute the real roots of a quadratic equation in a numerically stable manner

## Introduction

In floating point arithmetic, the naive method for determining the roots of a quadratic equation ("x equals negative b, plus or minus etc.") may lead to severe cancellation and an inaccurate result.

Sample usage:

```javascript
var roots = require('quadratic-roots')

roots(0,0,0)   // --> []
roots(0,0,6)   // --> []
roots(0,2,6)   // --> [-3]
roots(1,1,-12) // --> [-4,3]
roots(1,-4,4)  // --> [2,2]
roots(1,0,1)   // --> []
```


## Install

```sh
$ npm install quadratic-roots
```


## API

### `require('quadratic-roots')( a, b, c )`
Compute the roots of the polynomial ax^2 + bx + c = 0.

**Returns**
- If no roots, returns an empty array `[]`
- If a linear equation, returns one root
- If a parabola with no real roots, returns an empty array
- If a parabola with one root multiplicity 2, returns an array with the same root twice
- Otherwise returns an array with two real roots


## Credits

(c) 2015 Ricky Reusser. MIT License
