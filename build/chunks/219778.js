/** Chunk was on 2026 **/
/** chunk id: 219778, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => o
});
var Chunk647438 = require("./647438.js"),
  Chunk180650 = require("./180650.js");
let l = {
    [Chunk180650.T.AESPA]: {
      responsive: true,
      backgroundStyle: "linear-gradient(0deg,rgba(40, 8, 120, 1) 0%,rgba(13, 8, 111, 1) 15%,rgba(11, 2, 60, 1) 50%,rgba(6, 1, 21, 1) 100%)"
    },
    [Chunk180650.T.ORB]: {
      responsive: true,
      backgroundStyle: "linear-gradient(180deg, rgba(39, 30, 173, 0.3), transparent)",
      hideSideShadow: true
    }
  },
  a = 12633 == require.j ? {
    responsive: true,
    backgroundStyle: true,
    hideSideShadow: false
  } : null,
  o = e => (0, r.useMemo)(() => {
    let t = null != e ? l[e] : null;
    return null != t ? function(e) {
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
    }({}, a, t) : a
  }, [e])