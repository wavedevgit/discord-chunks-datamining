/** Chunk was on web.js **/
/** chunk id: 275717, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk621523 = require("./621523.js"),
  Chunk880181 = require("./880181.js"),
  a = /#|\.prototype\./,
  o = function(e, t) {
    var n = l[s(e)];
    return n === u || n !== c && (i(t) ? r(t) : !!t)
  },
  s = o.normalize = function(e) {
    return String(e).replace(a, ".").toLowerCase()
  },
  l = o.data = {},
  c = o.NATIVE = "N",
  u = o.POLYFILL = "P";
module.exports = o