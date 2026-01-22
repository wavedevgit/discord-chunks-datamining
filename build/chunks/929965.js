/** Chunk was on 35511 **/
/** chunk id: 929965, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk675879 = require("./675879.js"),
  Chunk999843 = require("./999843.js"),
  Chunk407057 = require("./407057.js"),
  Chunk512008 = require("./512008.js"),
  Chunk596479 = require("./596479.js"),
  Chunk691805 = require("./691805.js"),
  c = Function,
  u = Chunk675879([].concat),
  d = Chunk675879([].join),
  p = {},
  h = function(e, t, n) {
    if (!i(p, t)) {
      for (var r = [], a = 0; a < t; a++) r[a] = "a[" + a + "]";
      p[t] = c("C,a", "return new C(" + d(r, ",") + ")")
    }
    return p[t](e, n)
  };
module.exports = Chunk691805 ? c.bind : function(e) {
  var t = a(this),
    n = t.prototype,
    r = s(arguments, 1),
    i = function() {
      var n = u(r, s(arguments));
      return this instanceof i ? h(t, n.length, n) : t.apply(e, n)
    };
  return o(n) && (i.prototype = n), i
}