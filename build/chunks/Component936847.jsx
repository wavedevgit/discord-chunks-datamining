/** Chunk was on 24255 **/
/** chunk id: 936847, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk576125 = require("./576125.js"),
  Chunk465858 = require("./465858.js"),
  Chunk112843 = require("./112843.js"),
  Chunk524484 = require("./524484.js");

function s(e) {
  let {
    callTileRef: t,
    isFiring: n
  } = e, r = (0, o.Z)(), i = (0, a.Z)(t);
  return l.useEffect(() => {
    n && null != i && null != t && r.fire(i.x + t.clientWidth / 2, i.y + t.clientHeight / 2, {
      countMultiplier: 4
    })
  }, [t, r, n, i]), null
}

function c(e) {
  return (0, r.jsx)(i.Z, {
    confettiLocation: u.Hn.CALL_TILE,
    children: (0, r.jsx)(s, function(e) {
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
    }({}, e))
  })
}