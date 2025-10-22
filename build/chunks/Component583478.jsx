/** Chunk was on 93964 **/
/** chunk id: 583478, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => m
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
  Chunk544719 = require("./544719.js");
let y = new Chunk710845.Z("BalanceCounter"),
  j = (0, Chunk168232.dU)(true) === Chunk48541.C.PRODUCTION,
  d = e => null === e ? 0 : "".concat(e.toFixed(0)).length,
  g = e => {
    var t, r;
    let {
      value: l,
      onSetDigitCount: u,
      onValueChange: i,
      onValueReached: s,
      targetTotalCounterTime: b = 3e3
    } = e, [p, O] = (0, o.useState)(0), g = (0, o.useRef)(null), m = (0, o.useRef)(null);
    (0, o.useEffect)(() => {
      if (null === l) return;
      if (null === g.current) {
        g.current = l;
        return
      }
      let e = null !== g.current ? l - g.current : l;
      0 !== e && null !== g.current && i(e), m.current = {
        lastChangedAt: Date.now(),
        totalDelta: Math.abs(e)
      }
    }, [l, i]);
    let v = null != l ? l : 0,
      P = null != (t = g.current) ? t : v,
      {
        duration: h,
        delay: w
      } = (0, f.nL)(v - P, b),
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
          duration: h
        },
        delay: w,
        onStart: () => {
          u(d(P))
        },
        onRest: () => {
          if (O(p + 1), s(), !j && null !== m.current && null !== g.current) {
            let e = Date.now();
            y.log("Balance Counter finished updating: ", {
              time: e - m.current.lastChangedAt,
              delta: v - g.current
            })
          }
          u(d(v)), g.current = v
        }
      }),
      S = d(Math.max(null != l ? l : 0, D.get()));
    return (0, n.jsx)(a.animated.div, {
      style: {
        width: "calc(".concat(S, "ch)")
      },
      children: D.to(e => "".concat(e.toFixed(0)))
    })
  },
  m = e => {
    var t, {
        value: r,
        className: l
      } = e,
      a = function(e, t) {
        if (null == e) return {};
        var r, n, o = function(e, t) {
          if (null == e) return {};
          var r, n, o = {},
            l = Object.keys(e);
          for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
          return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
        }
        return o
      }(e, ["value", "className"]);
    let s = null === r,
      [b, f] = (0, o.useState)(null),
      p = (0, o.useMemo)(() => d(r), [r]),
      y = null != (t = (0, i.Z)(p)) ? t : 0,
      j = (0, o.useMemo)(() => null === b ? Math.max(y, p) : Math.max(p, b), [y, p, b]);
    return (0, n.jsx)(c.Text, {
      variant: "text-md/semibold",
      className: u()(O.balanceCounterText, s ? true : O.balanceCounterMargin, l),
      style: {
        width: "".concat(s ? 0 : j, "ch"),
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