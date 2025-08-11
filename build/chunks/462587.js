/** Chunk was on 23357 **/
/** chunk id: 462587, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk764908 = require("./764908.js"),
  Chunk691593 = require("./691593.js"),
  Chunk829575 = require("./829575.js"),
  Chunk185698 = require("./185698.js"),
  Chunk689933 = require("./689933.js"),
  Chunk45051 = require("./45051.js"),
  l = Function,
  u = Chunk764908([].concat),
  d = Chunk764908([].join),
  p = {},
  h = function(e, t, n) {
    if (!i(p, t)) {
      for (var r = [], o = 0; o < t; o++) r[o] = "a[" + o + "]";
      p[t] = l("C,a", "return new C(" + d(r, ",") + ")")
    }
    return p[t](e, n)
  };
module.exports = Chunk45051 ? l.bind : function(e) {
  var t = o(this),
    n = t.prototype,
    r = s(arguments, 1),
    i = function() {
      var n = u(r, s(arguments));
      return this instanceof i ? h(t, n.length, n) : t.apply(e, n)
    };
  return a(n) && (i.prototype = n), i
}