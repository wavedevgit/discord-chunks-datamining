/** Chunk was on web.js **/
/** chunk id: 970815, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A4: () => g,
  b6: () => Chunk317257.b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk317257 = require("./317257.js"),
  Chunk583478 = require("./583478.jsx"),
  Chunk976845 = require("./976845.jsx"),
  Chunk647917 = require("./647917.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
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
let p = () => (0, Chunk951288.jsx)("img", {
    className: Chunk647917.notificationBadge,
    src: require("./808824.js"),
    alt: ""
  }),
  h = "balance-widget-pill",
  m = (e, t) => e === l.b.SELECTED ? d.selected : t ? d.highlighted : d.default,
  g = (0, Chunk647438.forwardRef)(function(e, t) {
    let {
      id: n,
      balance: a,
      balanceWidgetMode: f = l.b.DEFAULT,
      showNotificationBadge: g,
      onClick: E,
      onMouseDown: b,
      disabled: y,
      isInModalOverlay: O,
      className: v
    } = e, [I, S] = (0, i.useState)(false), T = (0, i.useMemo)(() => m(f, I), [f, I]), [A, C] = (0, i.useState)(false), [N, R] = (0, i.useState)(false), [P, w] = (0, i.useState)(.9 * u.D2), D = null === a;
    (0, i.useEffect)(() => {
      D && !A && (C(true), setTimeout(() => {
        R(true)
      }, 500))
    }, [D, C, A]), (0, i.useEffect)(() => {
      N && !D && C(false)
    }, [D, N]);
    let x = D || A,
      L = A ? null : a,
      [j, M] = (0, i.useState)(null),
      k = (0, i.useRef)(null),
      U = (0, i.useCallback)(() => {
        k.current = null, M(null)
      }, []),
      G = (0, i.useCallback)(e => {
        let t = j === k.current;
        e > 0 && ("earn" !== j || !t) && M("earn")
      }, [M, j]),
      B = {
        currentAnimationType: j,
        animationTypeRef: k,
        onSetAnimationDurationMS: w
      };
    return (0, r.jsx)(s.P3F, {
      onClick: x ? true : E,
      className: o()(d.clickable, {
        [d.disabled]: y
      }),
      id: null != n ? n : h,
      children: (0, r.jsxs)("span", {
        onMouseDown: b,
        onMouseEnter: y ? true : () => S(true),
        onMouseLeave: y ? true : () => S(false),
        ref: t,
        className: o()(d.container, T, v, {
          [d.containerLoading]: x,
          [d.inModalOverlay]: O,
          [d.disabled]: y
        }),
        children: [(0, r.jsx)("div", {
          className: o()(d.orbsLottieContainer, x ? d.orbIconloading : true),
          children: (0, r.jsx)(u.ZP, _({}, B))
        }), (0, r.jsx)(c.Z, {
          value: L,
          onValueChange: G,
          onValueReached: U,
          targetTotalCounterTime: P,
          className: x ? d.counterLoading : true
        }), g && (0, r.jsx)(p, {})]
      })
    })
  })