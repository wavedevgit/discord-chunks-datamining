/** Chunk was on web.js **/
/** chunk id: 275717, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk621523 = require("./621523.js"),
  Chunk880181 = require("./880181.js"),
  o = /#|\.prototype\./,
  a = function(e, t) {
    var n = l[s(e)];
    return n === u || n !== c && (i(t) ? r(t) : !!t)
  },
  s = a.normalize = function(e) {
    return String(e).replace(o, ".").toLowerCase()
  },
  l = a.data = {},
  c = a.NATIVE = "N",
  u = a.POLYFILL = "P";
module.exports = a