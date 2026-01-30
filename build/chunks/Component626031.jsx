/** Chunk was on web.js **/
/** chunk id: 626031, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk970984 = require("./970984.js"),
  Chunk397927 = require("./397927.js"),
  Chunk475743 = require("./475743.js"),
  Chunk626584 = require("./626584.js"),
  Chunk572009 = require("./572009.js"),
  Chunk14115 = require("./14115.js"),
  Chunk115093 = require("./115093.js"),
  Chunk467043 = require("./467043.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = E(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let y = new Chunk626584.A("BalanceCounter"),
  b = (0, Chunk572009._$)(true) === Chunk115093.B.PRODUCTION,
  O = e => null == e ? 0 : "".concat(e.toFixed(0)).length,
  v = (e, t, n) => null === n ? Math.max(e, t) : Math.max(t, n),
  A = e => {
    var t, n;
    let {
      value: a,
      onSetDigitCount: o,
      onValueChange: c,
      onValueReached: u,
      targetTotalCounterTime: d = 3e3
    } = e, [p, _] = (0, i.useState)(0), h = (0, i.useRef)(null), m = (0, i.useRef)(null);
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
        delay: A
      } = (0, f.Y)(g - E, d),
      {
        number: I
      } = (0, l.zhh)({
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
        delay: A,
        onStart: () => {
          o(O(E))
        },
        onRest: () => {
          if (_(p + 1), u(), !b && null !== m.current && null !== h.current) {
            let e = Date.now();
            y.log("Balance Counter finished updating: ", {
              time: e - m.current.lastChangedAt,
              delta: g - h.current
            })
          }
          o(O(g)), h.current = g
        }
      }),
      S = O(Math.max(null != a ? a : 0, I.get()));
    return (0, r.jsx)(s.animated.div, {
      style: {
        width: "calc(".concat(S, "ch)")
      },
      children: I.to(e => "".concat(e.toFixed(0)))
    })
  },
  I = e => {
    var t;
    let {
      value: n,
      className: a
    } = e, s = g(e, ["value", "className"]), u = null === n, [d, f] = (0, i.useState)(null), p = (0, i.useMemo)(() => O(n), [n]), h = null != (t = (0, c.A)(p)) ? t : 0, E = (0, i.useMemo)(() => v(h, p, d), [h, p, d]), y = "".concat(u ? 0 : E, "ch");
    return (0, r.jsx)(l.Text, {
      variant: "text-md/semibold",
      className: o()(_.S, u ? true : _.r, a),
      style: {
        width: y,
        opacity: u ? "0" : 1
      },
      children: u ? null : (0, r.jsx)(A, m({
        onSetDigitCount: e => {
          e !== d && f(e)
        },
        value: n
      }, s))
    })
  }