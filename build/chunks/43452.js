/** Chunk was on web.js **/
/** chunk id: 43452, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk410323 = require("./410323.js"),
  Chunk503628 = require("./503628.js"),
  Chunk339626 = require("./339626.js"),
  Chunk324988 = require("./324988.js"),
  Chunk230606 = require("./230606.js"),
  Chunk997159 = require("./997159.js"),
  c = function() {},
  u = Chunk230606("Reflect", "construct"),
  d = /^\s*(?:class|function)\b/,
  f = Chunk410323(d.exec),
  p = !d.test(c),
  _ = function(e) {
    if (!a(e)) returnfalse;
    try {
      return u(c, [], e), true
    } catch (e) {
      returnfalse
    }
  },
  h = function(e) {
    if (!a(e)) returnfalse;
    switch (o(e)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        returnfalse
    }
    try {
      return p || !!f(d, l(e))
    } catch (e) {
      returntrue
    }
  };
h.sham = true, module.exports = !u || Chunk503628(function() {
  var e;
  return _(_.call) || !_(Object) || !_(function() {
    e = true
  }) || e
}) ? h : _