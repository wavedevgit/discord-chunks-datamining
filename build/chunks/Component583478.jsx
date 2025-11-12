/** Chunk was on web.js **/
/** chunk id: 583478, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk509442 = require("./509442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk710845 = require("./710845.js"),
  Chunk168232 = require("./168232.js"),
  Chunk490093 = require("./490093.js"),
  Chunk48541 = require("./48541.js"),
  Chunk664597 = require("./664597.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let b = new Chunk710845.Z("BalanceCounter"),
  y = (0, Chunk168232.dU)(true) === Chunk48541.C.PRODUCTION,
  O = e => null == e ? 0 : "".concat(e.toFixed(0)).length,
  v = (e, t, n) => null === n ? Math.max(e, t) : Math.max(t, n),
  I = e => {
    var t, n;
    let {
      value: a,
      onSetDigitCount: o,
      onValueChange: c,
      onValueReached: u,
      targetTotalCounterTime: d = 3e3
    } = e, [_, p] = (0, i.useState)(0), h = (0, i.useRef)(null), m = (0, i.useRef)(null);
    (0, i.useEffect)(() => {
      if (null === a) return;
      if (null === h.current) {
        h.current = a;
        return
      }
      let e = null !== h.current ? a - h.current : a;
      0 !== e && null !== h.current && c(e), m.current = {
        lastChangedAt: Date.now(),
        totalDelta: Math.abs(e)
      }
    }, [a, c]);
    let g = null != a ? a : 0,
      E = null != (t = h.current) ? t : g,
      {
        duration: v,
        delay: I
      } = (0, f.nL)(g - E, d),
      {
        number: T
      } = (0, l.q_F)({
        from: {
          number: null != (n = h.current) ? n : g
        },
        number: g,
        config: {
          mass: 1,
          tension: 20,
          friction: 10,
          duration: v
        },
        delay: I,
        onStart: () => {
          o(O(E))
        },
        onRest: () => {
          if (p(_ + 1), u(), !y && null !== m.current && null !== h.current) {
            let e = Date.now();
            b.log("Balance Counter finished updating: ", {
              time: e - m.current.lastChangedAt,
              delta: g - h.current
            })
          }
          o(O(g)), h.current = g
        }
      }),
      S = O(Math.max(null != a ? a : 0, T.get()));
    return (0, r.jsx)(s.animated.div, {
      style: {
        width: "calc(".concat(S, "ch)")
      },
      children: T.to(e => "".concat(e.toFixed(0)))
    })
  },
  T = e => {
    var t, {
        value: n,
        className: a
      } = e,
      s = g(e, ["value", "className"]);
    let u = null === n,
      [d, f] = (0, i.useState)(null),
      _ = (0, i.useMemo)(() => O(n), [n]),
      h = null != (t = (0, c.Z)(_)) ? t : 0,
      E = (0, i.useMemo)(() => v(h, _, d), [h, _, d]),
      b = "".concat(u ? 0 : E, "ch");
    return (0, r.jsx)(l.Text, {
      variant: "text-md/semibold",
      className: o()(p.balanceCounterText, u ? true : p.balanceCounterMargin, a),
      style: {
        width: b,
        opacity: u ? "0" : 1
      },
      children: u ? null : (0, r.jsx)(I, m({
        onSetDigitCount: e => {
          e !== d && f(e)
        },
        value: n
      }, s))
    })
  }