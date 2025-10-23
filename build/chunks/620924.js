/** Chunk was on 1272 **/
/** chunk id: 620924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => o
}), require("./913527.js");
var Chunk442837 = require("./442837.js"),
  Chunk91159 = require("./91159.js"),
  Chunk306680 = require("./306680.js"),
  Chunk709054 = require("./709054.js"),
  Chunk868807 = require("./868807.js");

function o(e) {
  let t = (0, s.a)(e),
    n = function(e) {
      let {
        lastMessageId: t,
        message: n,
        loaded: r
      } = e;
      return r && null != n ? a.default.extractTimestamp(n.id) : null != t ? a.default.extractTimestamp(t) : null
    }(function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      lastMessageId: (0, r.e7)([l.ZP], () => l.ZP.lastMessageId(e.id))
    }, t));
  return null == n ? "" : (0, i.Ye)(n)
}