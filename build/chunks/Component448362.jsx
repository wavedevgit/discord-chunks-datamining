/** Chunk was on web.js **/
/** chunk id: 448362, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gy: () => g,
  k7: () => l.k
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js");
require("./14115.js");
var Chunk305003 = require("./305003.js"),
  Chunk626031 = require("./626031.jsx"),
  Chunk339763 = require("./339763.jsx"),
  Chunk796688 = require("./796688.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}
let _ = () => (0, r.jsx)("img", {
    className: d.V8,
    src: n(324292),
    alt: ""
  }),
  h = "balance-widget-pill",
  m = (e, t) => e === l.k.SELECTED ? d.wH : t ? d.mr : d.Ay,
  g = (0, Chunk64700.forwardRef)(function(e, t) {
    let {
      id: n,
      balance: a,
      balanceWidgetMode: f = l.k.DEFAULT,
      showNotificationBadge: g,
      onClick: E,
      onMouseDown: b,
      disabled: y,
      isInModalOverlay: O,
      className: A
    } = e, [v, S] = (0, i.useState)(false), I = (0, i.useMemo)(() => m(f, v), [f, v]), [T, C] = (0, i.useState)(false), [N, R] = (0, i.useState)(false), [w, P] = (0, i.useState)(2700), D = null === a;
    (0, i.useEffect)(() => {
      D && !T && (C(true), setTimeout(() => {
        R(true)
      }, 500))
    }, [D, C, T]), (0, i.useEffect)(() => {
      N && !D && C(false)
    }, [D, N]);
    let x = D || T,
      L = T ? null : a,
      [j, M] = (0, i.useState)(null),
      k = (0, i.useRef)(null),
      U = (0, i.useCallback)(() => {
        k.current = null, M(null)
      }, []),
      G = (0, i.useCallback)(e => {
        let t = j === k.current;
        e > 0 && ("earn" !== j || !t) && M("earn")
      }, [M, j]),
      V = {
        currentAnimationType: j,
        animationTypeRef: k,
        onSetAnimationDurationMS: P
      };
    return (0, r.jsx)(o.DUT, {
      onClick: x ? true : E,
      className: s()(d.vk, {
        [d.r9]: y
      }),
      id: null != n ? n : h,
      children: (0, r.jsxs)("span", {
        onMouseDown: b,
        onMouseEnter: y ? true : () => S(true),
        onMouseLeave: y ? true : () => S(false),
        ref: t,
        className: s()(d.kL, I, A, {
          [d.En]: x,
          [d.dA]: O,
          [d.r9]: y
        }),
        children: [(0, r.jsx)("div", {
          className: s()(d.hr, x ? d.nr : true),
          children: (0, r.jsx)(u.Ay, p({}, V))
        }), (0, r.jsx)(c.A, {
          value: L,
          onValueChange: G,
          onValueReached: U,
          targetTotalCounterTime: w,
          className: x ? d.F : true
        }), g && (0, r.jsx)(_, {})]
      })
    })
  })