/** Chunk was on 35511 **/
/** chunk id: 537554, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk999843 = require("./999843.js"),
  Chunk280173 = require("./280173.js"),
  Chunk463843 = require("./463843.js"),
  s = TypeError,
  l = Chunk463843.get,
  c = Chunk463843.has,
  u = Chunk463843.set;
Chunk834647({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  update: function(e, t) {
    var n = o(this),
      r = arguments.length;
    a(t);
    var i = c(n, e);
    if (!i && r < 3) throw new s("Updating absent value");
    var d = i ? l(n, e) : a(r > 2 ? arguments[2] : true)(e, n);
    return u(n, e, t(d, e, n)), n
  }
})