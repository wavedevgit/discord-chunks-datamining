/** Chunk was on 35511 **/
/** chunk id: 132819, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk683570 = require("./683570.js"),
  Chunk421236 = require("./421236.js"),
  Chunk929965 = require("./929965.js"),
  Chunk258855 = require("./258855.js"),
  Chunk155084 = require("./155084.js"),
  Chunk407057 = require("./407057.js"),
  Chunk991207 = require("./991207.js"),
  Chunk486816 = require("./486816.js"),
  p = Chunk683570("Reflect", "construct"),
  h = Object.prototype,
  f = [].push,
  m = Chunk486816(function() {
    function e() {}
    return !(p(function() {}, [], e) instanceof e)
  }),
  y = !Chunk486816(function() {
    p(function() {})
  }),
  v = m || y;
Chunk834647({
  target: "Reflect",
  stat: true,
  forced: v,
  sham: v
}, {
  construct: function(e, t) {
    s(e), l(t);
    var n = arguments.length < 3 ? e : s(arguments[2]);
    if (y && !m) return p(e, t, n);
    if (e === n) {
      switch (t.length) {
        case 0:
          return new e;
        case 1:
          return new e(t[0]);
        case 2:
          return new e(t[0], t[1]);
        case 3:
          return new e(t[0], t[1], t[2]);
        case 4:
          return new e(t[0], t[1], t[2], t[3])
      }
      var r = [null];
      return o(f, r, t), new(o(i, e, r))
    }
    var a = n.prototype,
      d = u(c(a) ? a : h),
      v = o(e, d, t);
    return c(v) ? v : d
  }
})