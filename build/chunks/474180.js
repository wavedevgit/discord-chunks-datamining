/** Chunk was on web.js **/
"use strict";
var r = n(936940),
  i = n(354848),
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
e.exports = a