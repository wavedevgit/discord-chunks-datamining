/** Chunk was on 93964 **/
/** chunk id: 970815, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A4: () => O,
  b6: () => Chunk317257.b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  u = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk490093 = require("./490093.js"),
  Chunk317257 = require("./317257.js"),
  Chunk583478 = require("./583478.jsx"),
  Chunk976845 = require("./976845.jsx"),
  Chunk646855 = require("./646855.js");
let p = () => (0, Chunk951288.jsx)("img", {
    className: Chunk646855.notificationBadge,
    src: require("./808824.js"),
    alt: ""
  }),
  O = (0, Chunk647438.forwardRef)(function(e, t) {
    let {
      id: r,
      balance: l,
      balanceWidgetMode: O = i.b.DEFAULT,
      showNotificationBadge: y,
      onClick: j,
      onMouseDown: d,
      disabled: g,
      isInModalOverlay: m,
      className: v
    } = e, [P, h] = (0, o.useState)(false), w = (0, o.useMemo)(() => O === i.b.SELECTED ? f.selected : P ? f.highlighted : f.default, [O, P]), [D, S] = (0, o.useState)(false), [x, C] = (0, o.useState)(false), [E, k] = (0, o.useState)(.9 * c.D2), R = null === l;
    (0, o.useEffect)(() => {
      R && !D && (S(true), setTimeout(() => {
        C(true)
      }, 500))
    }, [R, S, D]), (0, o.useEffect)(() => {
      x && !R && S(false)
    }, [R, x]);
    let M = R || D,
      N = D ? null : l,
      [L, A] = (0, o.useState)(null),
      Z = (0, o.useRef)(null),
      T = (0, o.useCallback)(() => {
        Z.current = null, A(null)
      }, []),
      F = (0, o.useCallback)(e => {
        let t = L === Z.current;
        e > 0 && ("earn" !== L || !t) && A("earn")
      }, [A, L]);
    return (0, n.jsx)(a.P3F, {
      onClick: M ? true : j,
      className: u()(f.clickable, {
        [f.disabled]: g
      }),
      id: null != r ? r : "balance-widget-pill",
      children: (0, n.jsxs)("span", {
        onMouseDown: d,
        onMouseEnter: g ? true : () => h(true),
        onMouseLeave: g ? true : () => h(false),
        ref: t,
        className: u()(f.container, w, v, {
          [f.containerLoading]: M,
          [f.inModalOverlay]: m,
          [f.disabled]: g
        }),
        children: [(0, n.jsx)("div", {
          className: u()(f.orbsLottieContainer, M ? f.orbIconloading : true),
          children: (0, n.jsx)(b.ZP, function(e) {
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
          }({}, {
            currentAnimationType: L,
            animationTypeRef: Z,
            onSetAnimationDurationMS: k
          }))
        }), (0, n.jsx)(s.Z, {
          value: N,
          onValueChange: F,
          onValueReached: T,
          targetTotalCounterTime: E,
          className: M ? f.counterLoading : true
        }), y && (0, n.jsx)(p, {})]
      })
    })
  })