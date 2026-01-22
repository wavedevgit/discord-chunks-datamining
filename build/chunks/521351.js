/** Chunk was on web.js **/
/** chunk id: 521351, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk503628 = require("./503628.js"),
  Chunk339626 = require("./339626.js"),
  a = /#|\.prototype\./,
  s = function(e, t) {
    var n = l[o(e)];
    return n === u || n !== c && (i(t) ? r(t) : !!t)
  },
  o = s.normalize = function(e) {
    return String(e).replace(a, ".").toLowerCase()
  },
  l = s.data = {},
  c = s.NATIVE = "N",
  u = s.POLYFILL = "P";
module.exports = s