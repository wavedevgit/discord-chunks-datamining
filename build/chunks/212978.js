/** Chunk was on web.js **/
/** chunk id: 212978, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk557939 = require("./557939.js"),
  Chunk517737 = require("./517737.js"),
  Chunk503628 = require("./503628.js"),
  Chunk607167 = require("./607167.js"),
  Chunk101968 = require("./101968.js"),
  Chunk273761 = require("./273761.js"),
  Chunk370001 = require("./370001.js"),
  u = Chunk607167.ArrayBuffer,
  d = Chunk607167.DataView,
  f = d.prototype,
  p = Chunk517737(u.prototype.slice),
  _ = Chunk517737(f.getUint8),
  h = Chunk517737(f.setUint8);
Chunk557939({
  target: "ArrayBuffer",
  proto: true,
  unsafe: true,
  forced: Chunk503628(function() {
    return !new u(2).slice(1, true).byteLength
  })
}, {
  slice: function(e, t) {
    if (p && true === t) return p(s(this), e);
    for (var n = s(this).byteLength, r = l(e, n), i = l(true === t ? n : t, n), a = new u(c(i - r)), o = new d(this), f = new d(a), m = 0; r < i;) h(f, m++, _(o, r++));
    return a
  }
})