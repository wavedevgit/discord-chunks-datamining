/** Chunk was on 66317 **/
/** chunk id: 970815, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A4: () => h,
  b6: () => Chunk317257.b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk317257 = require("./317257.js"),
  Chunk583478 = require("./583478.jsx"),
  Chunk976845 = require("./976845.jsx"),
  Chunk494628 = require("./494628.js");
let b = () => (0, Chunk255367.jsx)("img", {
    className: Chunk494628.notificationBadge,
    src: require("./808824.js"),
    alt: ""
  }),
  f = (e, t) => e === u.b.SELECTED ? d.selected : t ? d.highlighted : d.default,
  h = (0, Chunk73800.forwardRef)(function(e, t) {
    let {
      id: r,
      balance: l,
      balanceWidgetMode: h = u.b.DEFAULT,
      showNotificationBadge: O,
      onClick: y,
      onMouseDown: p,
      disabled: m,
      isInModalOverlay: C,
      className: g
    } = e, [_, E] = (0, a.useState)(false), R = (0, a.useMemo)(() => f(h, _), [h, _]), [j, v] = (0, a.useState)(false), [S, P] = (0, a.useState)(false), [A, w] = (0, a.useState)(.9 * s.D2), L = null === l;
    (0, a.useEffect)(() => {
      L && !j && (v(true), setTimeout(() => {
        P(true)
      }, 500))
    }, [L, v, j]), (0, a.useEffect)(() => {
      S && !L && v(false)
    }, [L, S]);
    let k = L || j,
      D = j ? null : l,
      [N, U] = (0, a.useState)(null),
      I = (0, a.useRef)(null),
      T = (0, a.useCallback)(() => {
        I.current = null, U(null)
      }, []),
      V = (0, a.useCallback)(e => {
        let t = N === I.current;
        e > 0 && ("earn" !== N || !t) && U("earn")
      }, [U, N]);
    return (0, n.jsx)(o.P3F, {
      onClick: k ? true : y,
      className: i()(d.clickable, {
        [d.disabled]: m
      }),
      id: null != r ? r : "balance-widget-pill",
      children: (0, n.jsxs)("span", {
        onMouseDown: p,
        onMouseEnter: m ? true : () => E(true),
        onMouseLeave: m ? true : () => E(false),
        ref: t,
        className: i()(d.container, R, g, {
          [d.containerLoading]: k,
          [d.inModalOverlay]: C,
          [d.disabled]: m
        }),
        children: [(0, n.jsx)("div", {
          className: i()(d.orbsLottieContainer, k ? d.orbIconloading : true),
          children: (0, n.jsx)(s.ZP, function(e) {
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
            currentAnimationType: N,
            animationTypeRef: I,
            onSetAnimationDurationMS: w
          }))
        }), (0, n.jsx)(c.Z, {
          value: D,
          onValueChange: V,
          onValueReached: T,
          targetTotalCounterTime: A,
          className: k ? d.counterLoading : true
        }), O && (0, n.jsx)(b, {})]
      })
    })
  })