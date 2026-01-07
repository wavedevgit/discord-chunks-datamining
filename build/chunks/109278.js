/** Chunk was on 23357 **/
/** chunk id: 109278, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk178476 = require("./178476.js"),
  Chunk498996 = require("./498996.js"),
  Chunk462587 = require("./462587.js"),
  Chunk280405 = require("./280405.js"),
  Chunk921413 = require("./921413.js"),
  Chunk829575 = require("./829575.js"),
  Chunk425184 = require("./425184.js"),
  Chunk779688 = require("./779688.js"),
  p = Chunk178476("Reflect", "construct"),
  h = Object.prototype,
  f = [].push,
  m = Chunk779688(function() {
    function e() {}
    return !(p(function() {}, [], e) instanceof e)
  }),
  y = !Chunk779688(function() {
    p(function() {})
  }),
  v = m || y;
Chunk220159({
  target: "Reflect",
  stat: true,
  forced: v,
  sham: v
}, {
  construct: function(e, t) {
    s(e), c(t);
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
      return a(f, r, t), new(a(i, e, r))
    }
    var o = n.prototype,
      d = u(l(o) ? o : h),
      v = a(e, d, t);
    return l(v) ? v : d
  }
})