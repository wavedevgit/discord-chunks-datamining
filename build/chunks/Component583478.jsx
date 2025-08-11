/** Chunk was on 66317 **/
/** chunk id: 583478, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk710845 = require("./710845.js"),
  Chunk168232 = require("./168232.js"),
  Chunk976845 = require("./976845.jsx"),
  Chunk48541 = require("./48541.js"),
  Chunk718486 = require("./718486.js");
let O = new Chunk710845.Z("BalanceCounter"),
  y = (0, Chunk168232.dU)(true) === Chunk48541.C.PRODUCTION,
  p = e => null === e ? 0 : "".concat(e.toFixed(0)).length,
  m = (e, t) => {
    let r = e > 0,
      n = t * b.eg[r ? "EARN" : "SPEND"];
    return {
      duration: n,
      delay: r ? t - n : 0
    }
  },
  C = (e, t, r) => null === r ? Math.max(e, t) : Math.max(t, r),
  g = e => {
    var t, r;
    let {
      value: l,
      onSetDigitCount: i,
      onValueChange: c,
      onValueReached: s,
      targetTotalCounterTime: d = 3e3
    } = e, [b, f] = (0, a.useState)(0), h = (0, a.useRef)(null), C = (0, a.useRef)(null);
    (0, a.useEffect)(() => {
      if (null === l) return;
      if (null === h.current) {
        h.current = l;
        return
      }
      let e = null !== h.current ? l - h.current : l;
      0 !== e && null !== h.current && c(e), C.current = {
        lastChangedAt: Date.now(),
        totalDelta: Math.abs(e)
      }
    }, [l, c]);
    let g = null != l ? l : 0,
      _ = null != (t = h.current) ? t : g,
      {
        duration: E,
        delay: R
      } = m(g - _, d),
      {
        number: j
      } = (0, u.q_F)({
        from: {
          number: null != (r = h.current) ? r : g
        },
        number: g,
        config: {
          mass: 1,
          tension: 20,
          friction: 10,
          duration: E
        },
        delay: R,
        onStart: () => {
          i(p(_))
        },
        onRest: () => {
          if (f(b + 1), s(), !y && null !== C.current && null !== h.current) {
            let e = Date.now();
            O.log("Balance Counter finished updating: ", {
              time: e - C.current.lastChangedAt,
              delta: g - h.current
            })
          }
          i(p(g)), h.current = g
        }
      }),
      v = p(Math.max(null != l ? l : 0, j.get()));
    return (0, n.jsx)(o.animated.div, {
      style: {
        width: "calc(".concat(v, "ch)")
      },
      children: j.to(e => "".concat(e.toFixed(0)))
    })
  },
  _ = e => {
    var t, {
        value: r,
        className: l
      } = e,
      o = function(e, t) {
        if (null == e) return {};
        var r, n, a = function(e, t) {
          if (null == e) return {};
          var r, n, a = {},
            l = Object.keys(e);
          for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
      }(e, ["value", "className"]);
    let s = null === r,
      [d, b] = (0, a.useState)(null),
      f = (0, a.useMemo)(() => p(r), [r]),
      O = null != (t = (0, c.Z)(f)) ? t : 0,
      y = (0, a.useMemo)(() => C(O, f, d), [O, f, d]);
    return (0, n.jsx)(u.Text, {
      variant: "text-md/semibold",
      className: i()(h.balanceCounterText, s ? true : h.balanceCounterMargin, l),
      style: {
        width: "".concat(s ? 0 : y, "ch"),
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
          e !== d && b(e)
        },
        value: r
      }, o))
    })
  }