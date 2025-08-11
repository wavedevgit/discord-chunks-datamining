/** Chunk was on 78223 **/
/** chunk id: 219778, original params: e,n,r (module,exports,require) **/
require.d(exports, {
  n: () => u
});
var Chunk73800 = require("./73800.js"),
  Chunk180650 = require("./180650.js");
let o = {
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
  u = e => (0, l.useMemo)(() => {
    let n = null != e ? o[e] : null;
    return null != n ? function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {},
          l = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), l.forEach(function(n) {
          var l;
          l = r[n], n in e ? Object.defineProperty(e, n, {
            value: l,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[n] = l
        })
      }
      return e
    }({}, a, n) : a
  }, [e])