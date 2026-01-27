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
  o = require.n(Chunk503698),
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
      onMouseDown: y,
      disabled: b,
      isInModalOverlay: O,
      className: v
    } = e, [A, I] = (0, i.useState)(false), S = (0, i.useMemo)(() => m(f, A), [f, A]), [T, C] = (0, i.useState)(false), [N, w] = (0, i.useState)(false), [R, P] = (0, i.useState)(2700), D = null === a;
    (0, i.useEffect)(() => {
      D && !T && (C(true), setTimeout(() => {
        w(true)
      }, 500))
    }, [D, C, T]), (0, i.useEffect)(() => {
      N && !D && C(false)
    }, [D, N]);
    let L = D || T,
      x = T ? null : a,
      [M, j] = (0, i.useState)(null),
      k = (0, i.useRef)(null),
      U = (0, i.useCallback)(() => {
        k.current = null, j(null)
      }, []),
      G = (0, i.useCallback)(e => {
        let t = M === k.current;
        e > 0 && ("earn" !== M || !t) && j("earn")
      }, [j, M]),
      F = {
        currentAnimationType: M,
        animationTypeRef: k,
        onSetAnimationDurationMS: P
      };
    return (0, r.jsx)(s.DUT, {
      onClick: L ? true : E,
      className: o()(d.vk, {
        [d.r9]: b
      }),
      id: null != n ? n : h,
      children: (0, r.jsxs)("span", {
        onMouseDown: y,
        onMouseEnter: b ? true : () => I(true),
        onMouseLeave: b ? true : () => I(false),
        ref: t,
        className: o()(d.kL, S, v, {
          [d.En]: L,
          [d.dA]: O,
          [d.r9]: b
        }),
        children: [(0, r.jsx)("div", {
          className: o()(d.hr, L ? d.nr : true),
          children: (0, r.jsx)(u.Ay, p({}, F))
        }), (0, r.jsx)(c.A, {
          value: x,
          onValueChange: G,
          onValueReached: U,
          targetTotalCounterTime: R,
          className: L ? d.F : true
        }), g && (0, r.jsx)(_, {})]
      })
    })
  })