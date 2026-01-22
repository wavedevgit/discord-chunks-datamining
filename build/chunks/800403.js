/** Chunk was on 94678 **/
/** chunk id: 800403, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk486816 = require("./486816.js"),
  Chunk309270 = require("./309270.js"),
  s = /#|\.prototype\./,
  i = function(t, r) {
    var e = c[u(t)];
    return e === f || e !== a && (o(r) ? n(r) : !!r)
  },
  u = i.normalize = function(t) {
    return String(t).replace(s, ".").toLowerCase()
  },
  c = i.data = {},
  a = i.NATIVE = "N",
  f = i.POLYFILL = "P";
module.exports = i