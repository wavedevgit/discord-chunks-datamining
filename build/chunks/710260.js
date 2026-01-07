/** Chunk was on 23357 **/
/** chunk id: 710260, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk181794 = require("./181794.js"),
  Chunk779688 = require("./779688.js"),
  Chunk764908 = require("./764908.js"),
  Chunk709583 = require("./709583.js"),
  Chunk61824 = require("./61824.js"),
  Chunk658971 = require("./658971.js"),
  l = Chunk764908(require("./75411.js").f),
  u = Chunk764908([].push),
  d = Chunk181794 && Chunk779688(function() {
    var e = Object.create(null);
    return e[2] = 2, !l(e, 2)
  }),
  p = function(e) {
    return function(t) {
      for (var n, o = c(t), a = s(o), p = d && null === i(o), h = a.length, f = 0, m = []; h > f;) n = a[f++], (!r || (p ? n in o : l(o, n))) && u(m, e ? [n, o[n]] : o[n]);
      return m
    }
  };
module.exports = {
  entries: p(true),
  values: p(false)
}