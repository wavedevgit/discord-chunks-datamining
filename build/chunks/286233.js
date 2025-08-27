/** Chunk was on web.js **/
/** chunk id: 286233, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk538315 = require("./538315.js"),
  i = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
  a = Object.prototype.toString,
  o = Array.prototype.concat,
  Chunk834889 = require("./834889.js"),
  l = function(e) {
    return "function" == typeof e && "[object Function]" === a.call(e)
  },
  c = require("./134533.js")(),
  u = function(e, t, n, r) {
    if (t in e) {
      if (true === r) {
        if (e[t] === n) return
      } else if (!l(r) || !r()) return
    }
    c ? s(e, t, n, true) : s(e, t, n)
  },
  d = function(e, t) {
    var n = arguments.length > 2 ? arguments[2] : {},
      a = r(t);
    i && (a = o.call(a, Object.getOwnPropertySymbols(t)));
    for (var s = 0; s < a.length; s += 1) u(e, a[s], t[a[s]], n[a[s]])
  };
d.supportsDescriptors = !!c, module.exports = d