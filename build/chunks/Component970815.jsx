/** Chunk was on 75215 **/
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
  Chunk647917 = require("./647917.js");
let p = () => (0, Chunk951288.jsx)("img", {
    className: Chunk647917.notificationBadge,
    src: require("./808824.js"),
    alt: ""
  }),
  O = (0, Chunk647438.forwardRef)(function(e, t) {
    let {
      id: r,
      balance: o,
      balanceWidgetMode: O = i.b.DEFAULT,
      showNotificationBadge: y,
      onClick: d,
      onMouseDown: m,
      disabled: g,
      isInModalOverlay: j,
      className: v
    } = e, [h, P] = (0, l.useState)(false), w = (0, l.useMemo)(() => O === i.b.SELECTED ? f.selected : h ? f.highlighted : f.default, [O, h]), [D, C] = (0, l.useState)(false), [S, x] = (0, l.useState)(false), [k, E] = (0, l.useState)(.9 * c.D2), M = null === o;
    (0, l.useEffect)(() => {
      M && !D && (C(true), setTimeout(() => {
        x(true)
      }, 500))
    }, [M, C, D]), (0, l.useEffect)(() => {
      S && !M && C(false)
    }, [M, S]);
    let L = M || D,
      N = D ? null : o,
      [R, A] = (0, l.useState)(null),
      T = (0, l.useRef)(null),
      F = (0, l.useCallback)(() => {
        T.current = null, A(null)
      }, []),
      Z = (0, l.useCallback)(e => {
        let t = R === T.current;
        e > 0 && ("earn" !== R || !t) && A("earn")
      }, [A, R]);
    return (0, n.jsx)(a.P3F, {
      onClick: L ? true : d,
      className: u()(f.clickable, {
        [f.disabled]: g
      }),
      id: null != r ? r : "balance-widget-pill",
      children: (0, n.jsxs)("span", {
        onMouseDown: m,
        onMouseEnter: g ? true : () => P(true),
        onMouseLeave: g ? true : () => P(false),
        ref: t,
        className: u()(f.container, w, v, {
          [f.containerLoading]: L,
          [f.inModalOverlay]: j,
          [f.disabled]: g
        }),
        children: [(0, n.jsx)("div", {
          className: u()(f.orbsLottieContainer, L ? f.orbIconloading : true),
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
            currentAnimationType: R,
            animationTypeRef: T,
            onSetAnimationDurationMS: E
          }))
        }), (0, n.jsx)(s.Z, {
          value: N,
          onValueChange: Z,
          onValueReached: F,
          targetTotalCounterTime: k,
          className: L ? f.counterLoading : true
        }), y && (0, n.jsx)(p, {})]
      })
    })
  })