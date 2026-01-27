/** Chunk was on 7034 **/
/** chunk id: 254075, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk417597 = require("./417597.js"),
  Chunk3137 = require("./3137.js"),
  Chunk620141 = require("./620141.js"),
  Chunk966598 = require("./966598.js"),
  Chunk224964 = require("./224964.js"),
  Chunk31408 = require("./31408.js");

function p(e) {
  let {
    reactionRef: t,
    count: n
  } = e, i = l.useRef(n), s = (0, o.bG)([a.A], () => a.A.getState()), d = (0, c.A)(), p = (0, u.A)(t);
  return l.useEffect(() => {
    if (n > i.current && null != p) {
      let e = (0, r.clamp)(n, s.confettiCount / 2, 2 * s.confettiCount);
      d.fire(p.x, p.y, {
        count: e
      })
    }
    i.current = n
  }, [n, p, d, s.confettiCount]), null
}

function h(e) {
  return (0, i.jsx)(s.A, {
    confettiLocation: d.k.REACTION,
    children: (0, i.jsx)(p, function(e) {
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