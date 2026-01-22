/** Chunk was on 94678 **/
/** chunk id: 971679, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk675879 = require("./675879.js"),
  Chunk999843 = require("./999843.js"),
  Chunk693755 = require("./693755.js"),
  Chunk554987 = require("./554987.js"),
  Chunk463843 = require("./463843.js"),
  Chunk780940 = require("./780940.js"),
  Chunk486816 = require("./486816.js"),
  p = Chunk463843.Map,
  l = Chunk463843.has,
  v = Chunk463843.get,
  y = Chunk463843.set,
  h = Chunk675879([].push),
  x = Chunk780940 || Chunk486816(function() {
    return 1 !== p.groupBy("ab", function(t) {
      return t
    }).get("a").length
  });
Chunk834647({
  target: "Map",
  stat: true,
  forced: Chunk780940 || x
}, {
  groupBy: function(t, r) {
    i(t), s(r);
    var e = new p,
      n = 0;
    return u(t, function(t) {
      var o = r(t, n++);
      l(e, o) ? h(v(e, o), t) : y(e, o, [t])
    }), e
  }
})