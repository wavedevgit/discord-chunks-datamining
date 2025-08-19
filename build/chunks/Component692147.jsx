/** Chunk was on 38626 **/
/** chunk id: 692147, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk399606 = require("./399606.js"),
  Chunk351780 = require("./351780.js"),
  Chunk576125 = require("./576125.js"),
  Chunk465858 = require("./465858.js"),
  Chunk112843 = require("./112843.js"),
  Chunk524484 = require("./524484.js");

function h(e) {
  let {
    reactionRef: t,
    count: n
  } = e, i = l.useRef(n), s = (0, o.e7)([a.Z], () => a.Z.getState()), d = (0, u.Z)(), h = (0, c.Z)(t);
  return l.useEffect(() => {
    if (n > i.current && null != h) {
      let e = (0, r.clamp)(n, s.confettiCount / 2, 2 * s.confettiCount);
      d.fire(h.x, h.y, {
        count: e
      })
    }
    i.current = n
  }, [n, h, d, s.confettiCount]), null
}

function p(e) {
  return (0, i.jsx)(s.Z, {
    confettiLocation: d.Hn.REACTION,
    children: (0, i.jsx)(h, function(e) {
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