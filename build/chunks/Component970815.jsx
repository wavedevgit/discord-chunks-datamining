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
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk490093 = require("./490093.js"),
  Chunk317257 = require("./317257.js"),
  Chunk583478 = require("./583478.jsx"),
  Chunk976845 = require("./976845.jsx"),
  Chunk647917 = require("./647917.js");

function p(e, t, n) {
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
      p(e, t, n[t])
    })
  }
  return e
}
let m = () => (0, Chunk54381.jsx)("img", {
    className: Chunk647917.notificationBadge,
    src: require("./808824.js"),
    alt: ""
  }),
  h = "balance-widget-pill",
  g = (e, t) => e === c.b.SELECTED ? f.selected : t ? f.highlighted : f.default,
  E = (0, Chunk473749.forwardRef)(function(e, t) {
    let {
      id: n,
      balance: o,
      balanceWidgetMode: p = c.b.DEFAULT,
      showNotificationBadge: E,
      onClick: b,
      onMouseDown: y,
      disabled: O,
      isInModalOverlay: v,
      className: S
    } = e, [I, T] = (0, i.useState)(false), C = (0, i.useMemo)(() => g(p, I), [p, I]), [A, N] = (0, i.useState)(false), [P, R] = (0, i.useState)(false), [w, D] = (0, i.useState)(.9 * l.D2), x = null === o;
    (0, i.useEffect)(() => {
      x && !A && (N(true), setTimeout(() => {
        R(true)
      }, 500))
    }, [x, N, A]), (0, i.useEffect)(() => {
      P && !x && N(false)
    }, [x, P]);
    let L = x || A,
      j = A ? null : o,
      [M, k] = (0, i.useState)(null),
      U = (0, i.useRef)(null),
      G = (0, i.useCallback)(() => {
        U.current = null, k(null)
      }, []),
      Z = (0, i.useCallback)(e => {
        let t = M === U.current;
        e > 0 && ("earn" !== M || !t) && k("earn")
      }, [k, M]),
      F = {
        currentAnimationType: M,
        animationTypeRef: U,
        onSetAnimationDurationMS: D
      };
    return (0, r.jsx)(s.P3F, {
      onClick: L ? true : b,
      className: a()(f.clickable, {
        [f.disabled]: O
      }),
      id: null != n ? n : h,
      children: (0, r.jsxs)("span", {
        onMouseDown: y,
        onMouseEnter: O ? true : () => T(true),
        onMouseLeave: O ? true : () => T(false),
        ref: t,
        className: a()(f.container, C, S, {
          [f.containerLoading]: L,
          [f.inModalOverlay]: v,
          [f.disabled]: O
        }),
        children: [(0, r.jsx)("div", {
          className: a()(f.orbsLottieContainer, L ? f.orbIconloading : true),
          children: (0, r.jsx)(d.ZP, _({}, F))
        }), (0, r.jsx)(u.Z, {
          value: j,
          onValueChange: Z,
          onValueReached: G,
          targetTotalCounterTime: w,
          className: L ? f.counterLoading : true
        }), E && (0, r.jsx)(m, {})]
      })
    })
  })