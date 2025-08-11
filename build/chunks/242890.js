/** Chunk was on 23357 **/
/** chunk id: 242890, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk691593 = require("./691593.js"),
  Chunk519467 = require("./519467.js"),
  Chunk613694 = require("./613694.js"),
  s = TypeError,
  c = Chunk613694.get,
  l = Chunk613694.has,
  u = Chunk613694.set;
Chunk220159({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  update: function(e, t) {
    var n = a(this),
      r = arguments.length;
    o(t);
    var i = l(n, e);
    if (!i && r < 3) throw new s("Updating absent value");
    var d = i ? c(n, e) : o(r > 2 ? arguments[2] : true)(e, n);
    return u(n, e, t(d, e, n)), n
  }
})