/** Chunk was on 31748 **/
/** chunk id: 612258, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk620141 = require("./620141.js"),
  Chunk966598 = require("./966598.js"),
  Chunk224964 = require("./224964.js"),
  Chunk31408 = require("./31408.js");

function c(e) {
  let {
    callTileRef: t,
    isFiring: n
  } = e, l = (0, s.A)(), i = (0, a.A)(t);
  return r.useEffect(() => {
    n && null != i && null != t && l.fire(i.x + t.clientWidth / 2, i.y + t.clientHeight / 2, {
      countMultiplier: 4
    })
  }, [t, l, n, i]), null
}

function u(e) {
  return (0, l.jsx)(i.A, {
    confettiLocation: o.k.CALL_TILE,
    children: (0, l.jsx)(c, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
          var l;
          l = n[t], t in e ? Object.defineProperty(e, t, {
            value: l,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = l
        })
      }
      return e
    }({}, e))
  })
}