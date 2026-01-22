/** Chunk was on 21738 **/
/** chunk id: 800583, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => o
}), require("./989349.js");
var Chunk311907 = require("./311907.js"),
  Chunk707539 = require("./707539.js"),
  Chunk222823 = require("./222823.js"),
  Chunk661191 = require("./661191.js"),
  Chunk978914 = require("./978914.js");

function o(e) {
  let t = (0, s.I)(e),
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
      lastMessageId: (0, r.bG)([l.Ay], () => l.Ay.lastMessageId(e.id))
    }, t));
  return null == n ? "" : (0, i.aK)(n)
}