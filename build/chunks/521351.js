/** Chunk was on web.js **/
/** chunk id: 521351, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk503628 = require("./503628.js"),
  Chunk339626 = require("./339626.js"),
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