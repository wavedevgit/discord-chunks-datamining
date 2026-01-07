/** Chunk was on 50448 **/
/** chunk id: 468790, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk764908 = require("./764908.js"),
  Chunk779688 = require("./779688.js"),
  Chunk971428 = require("./971428.js"),
  Chunk872715 = require("./872715.js"),
  Chunk178476 = require("./178476.js"),
  Chunk975378 = require("./975378.js"),
  f = function() {},
  a = Chunk178476("Reflect", "construct"),
  p = /^\s*(?:class|function)\b/,
  l = Chunk764908(p.exec),
  v = !p.test(f),
  y = function(t) {
    if (!i(t)) returnfalse;
    try {
      return a(f, [], t), true
    } catch (t) {
      returnfalse
    }
  },
  h = function(t) {
    if (!i(t)) returnfalse;
    switch (u(t)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        returnfalse
    }
    try {
      return v || !!l(p, c(t))
    } catch (t) {
      returntrue
    }
  };
h.sham = true, module.exports = !a || Chunk779688(function() {
  var t;
  return y(y.call) || !y(Object) || !y(function() {
    t = true
  }) || t
}) ? h : y