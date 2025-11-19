/** Chunk was on web.js **/
/** chunk id: 970815, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A4: () => E,
  b6: () => Chunk317257.b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk490093 = require("./490093.js"),
  Chunk317257 = require("./317257.js"),
  Chunk583478 = require("./583478.jsx"),
  Chunk976845 = require("./976845.jsx"),
  Chunk647917 = require("./647917.js");

function _(e, t, n) {
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
      _(e, t, n[t])
    })
  }
  return e
}
let h = () => (0, Chunk54381.jsx)("img", {
    className: Chunk647917.notificationBadge,
    src: require("./808824.js"),
    alt: ""
  }),
  m = "balance-widget-pill",
  g = (e, t) => e === c.b.SELECTED ? f.selected : t ? f.highlighted : f.default,
  E = (0, Chunk473749.forwardRef)(function(e, t) {
    let {
      id: n,
      balance: a,
      balanceWidgetMode: _ = c.b.DEFAULT,
      showNotificationBadge: E,
      onClick: b,
      onMouseDown: y,
      disabled: O,
      isInModalOverlay: v,
      className: I
    } = e, [T, S] = (0, i.useState)(false), A = (0, i.useMemo)(() => g(_, T), [_, T]), [C, N] = (0, i.useState)(false), [R, P] = (0, i.useState)(false), [D, w] = (0, i.useState)(.9 * l.D2), L = null === a;
    (0, i.useEffect)(() => {
      L && !C && (N(true), setTimeout(() => {
        P(true)
      }, 500))
    }, [L, N, C]), (0, i.useEffect)(() => {
      R && !L && N(false)
    }, [L, R]);
    let x = L || C,
      M = C ? null : a,
      [j, k] = (0, i.useState)(null),
      U = (0, i.useRef)(null),
      G = (0, i.useCallback)(() => {
        U.current = null, k(null)
      }, []),
      B = (0, i.useCallback)(e => {
        let t = j === U.current;
        e > 0 && ("earn" !== j || !t) && k("earn")
      }, [k, j]),
      Z = {
        currentAnimationType: j,
        animationTypeRef: U,
        onSetAnimationDurationMS: w
      };
    return (0, r.jsx)(s.P3F, {
      onClick: x ? true : b,
      className: o()(f.clickable, {
        [f.disabled]: O
      }),
      id: null != n ? n : m,
      children: (0, r.jsxs)("span", {
        onMouseDown: y,
        onMouseEnter: O ? true : () => S(true),
        onMouseLeave: O ? true : () => S(false),
        ref: t,
        className: o()(f.container, A, I, {
          [f.containerLoading]: x,
          [f.inModalOverlay]: v,
          [f.disabled]: O
        }),
        children: [(0, r.jsx)("div", {
          className: o()(f.orbsLottieContainer, x ? f.orbIconloading : true),
          children: (0, r.jsx)(d.ZP, p({}, Z))
        }), (0, r.jsx)(u.Z, {
          value: M,
          onValueChange: B,
          onValueReached: G,
          targetTotalCounterTime: D,
          className: x ? f.counterLoading : true
        }), E && (0, r.jsx)(h, {})]
      })
    })
  })