/** Chunk was on web.js **/
/** chunk id: 146733, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk98405 = require("./98405.js"),
  Chunk35760 = require("./35760.js"),
  Chunk621523 = require("./621523.js"),
  Chunk391246 = require("./391246.js"),
  Chunk179122 = require("./179122.js"),
  Chunk201390 = require("./201390.js"),
  Chunk554148 = require("./554148.js"),
  u = Chunk391246.ArrayBuffer,
  d = Chunk391246.DataView,
  f = d.prototype,
  p = Chunk35760(u.prototype.slice),
  _ = Chunk35760(f.getUint8),
  m = Chunk35760(f.setUint8);
Chunk98405({
  target: "ArrayBuffer",
  proto: true,
  unsafe: true,
  forced: Chunk621523(function() {
    return !new u(2).slice(1, true).byteLength
  })
}, {
  slice: function(e, t) {
    if (p && true === t) return p(s(this), e);
    for (var n = s(this).byteLength, r = l(e, n), i = l(true === t ? n : t, n), a = new u(c(i - r)), o = new d(this), f = new d(a), h = 0; r < i;) m(f, h++, _(o, r++));
    return a
  }
})