/** Chunk was on 86642 **/
/** chunk id: 936847, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk576125 = require("./576125.js"),
  Chunk465858 = require("./465858.js"),
  Chunk112843 = require("./112843.js"),
  Chunk524484 = require("./524484.js");

function c(e) {
  let {
    callTileRef: t,
    isFiring: n
  } = e, i = (0, o.Z)(), l = (0, a.Z)(t);
  return r.useEffect(() => {
    n && null != l && null != t && i.fire(l.x + t.clientWidth / 2, l.y + t.clientHeight / 2, {
      countMultiplier: 4
    })
  }, [t, i, n, l]), null
}

function u(e) {
  return (0, i.jsx)(l.Z, {
    confettiLocation: s.Hn.CALL_TILE,
    children: (0, i.jsx)(c, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({}, e))
  })
}