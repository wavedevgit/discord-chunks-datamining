/** Chunk was on 94678 **/
/** chunk id: 712192, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk675879 = require("./675879.js"),
  Chunk486816 = require("./486816.js"),
  Chunk309270 = require("./309270.js"),
  Chunk781544 = require("./781544.js"),
  Chunk683570 = require("./683570.js"),
  Chunk84475 = require("./84475.js"),
  a = function() {},
  f = Chunk683570("Reflect", "construct"),
  p = /^\s*(?:class|function)\b/,
  l = Chunk675879(p.exec),
  v = !p.test(a),
  y = function(t) {
    if (!s(t)) returnfalse;
    try {
      return f(a, [], t), true
    } catch (t) {
      returnfalse
    }
  },
  h = function(t) {
    if (!s(t)) returnfalse;
    switch (i(t)) {
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
h.sham = true, module.exports = !f || Chunk486816(function() {
  var t;
  return y(y.call) || !y(Object) || !y(function() {
    t = true
  }) || t
}) ? h : y