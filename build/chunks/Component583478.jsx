/** Chunk was on 75215 **/
/** chunk id: 583478, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  u = require.n(Chunk120356),
  Chunk13941 = require("./13941.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk710845 = require("./710845.js"),
  Chunk168232 = require("./168232.js"),
  Chunk490093 = require("./490093.js"),
  Chunk48541 = require("./48541.js"),
  Chunk664597 = require("./664597.js");
let y = new Chunk710845.Z("BalanceCounter"),
  d = (0, Chunk168232.dU)(true) === Chunk48541.C.PRODUCTION,
  m = e => null == e ? 0 : "".concat(e.toFixed(0)).length,
  g = e => {
    var t, r;
    let {
      value: o,
      onSetDigitCount: u,
      onValueChange: i,
      onValueReached: s,
      targetTotalCounterTime: b = 3e3
    } = e, [p, O] = (0, l.useState)(0), g = (0, l.useRef)(null), j = (0, l.useRef)(null);
    (0, l.useEffect)(() => {
      if (null === o) return;
      if (null === g.current) {
        g.current = o;
        return
      }
      let e = null !== g.current ? o - g.current : o;
      0 !== e && null !== g.current && i(e), j.current = {
        lastChangedAt: Date.now(),
        totalDelta: Math.abs(e)
      }
    }, [o, i]);
    let v = null != o ? o : 0,
      h = null != (t = g.current) ? t : v,
      {
        duration: P,
        delay: w
      } = (0, f.nL)(v - h, b),
      {
        number: D
      } = (0, c.q_F)({
        from: {
          number: null != (r = g.current) ? r : v
        },
        number: v,
        config: {
          mass: 1,
          tension: 20,
          friction: 10,
          duration: P
        },
        delay: w,
        onStart: () => {
          u(m(h))
        },
        onRest: () => {
          if (O(p + 1), s(), !d && null !== j.current && null !== g.current) {
            let e = Date.now();
            y.log("Balance Counter finished updating: ", {
              time: e - j.current.lastChangedAt,
              delta: v - g.current
            })
          }
          u(m(v)), g.current = v
        }
      }),
      C = m(Math.max(null != o ? o : 0, D.get()));
    return (0, n.jsx)(a.animated.div, {
      style: {
        width: "calc(".concat(C, "ch)")
      },
      children: D.to(e => "".concat(e.toFixed(0)))
    })
  },
  j = e => {
    var t, {
        value: r,
        className: o
      } = e,
      a = function(e, t) {
        if (null == e) return {};
        var r, n, l = function(e, t) {
          if (null == e) return {};
          var r, n, l = {},
            o = Object.keys(e);
          for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
          return l
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
        }
        return l
      }(e, ["value", "className"]);
    let s = null === r,
      [b, f] = (0, l.useState)(null),
      p = (0, l.useMemo)(() => m(r), [r]),
      y = null != (t = (0, i.Z)(p)) ? t : 0,
      d = (0, l.useMemo)(() => null === b ? Math.max(y, p) : Math.max(p, b), [y, p, b]);
    return (0, n.jsx)(c.Text, {
      variant: "text-md/semibold",
      className: u()(O.balanceCounterText, s ? true : O.balanceCounterMargin, o),
      style: {
        width: "".concat(s ? 0 : d, "ch"),
        opacity: s ? "0" : 1
      },
      children: s ? null : (0, n.jsx)(g, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({
        onSetDigitCount: e => {
          e !== b && f(e)
        },
        value: r
      }, a))
    })
  }