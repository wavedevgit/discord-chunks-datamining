/** Chunk was on 66317 **/
/** chunk id: 970815, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A4: () => f,
  b6: () => Chunk317257.b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk317257 = require("./317257.js"),
  Chunk583478 = require("./583478.jsx"),
  Chunk976845 = require("./976845.jsx"),
  Chunk647917 = require("./647917.js");
let b = () => (0, Chunk951288.jsx)("img", {
    className: Chunk647917.notificationBadge,
    src: require("./808824.js"),
    alt: ""
  }),
  f = (0, Chunk647438.forwardRef)(function(e, t) {
    let {
      id: r,
      balance: l,
      balanceWidgetMode: f = u.b.DEFAULT,
      showNotificationBadge: h,
      onClick: O,
      onMouseDown: y,
      disabled: p,
      isInModalOverlay: m,
      className: C
    } = e, [g, _] = (0, a.useState)(false), E = (0, a.useMemo)(() => f === u.b.SELECTED ? d.selected : g ? d.highlighted : d.default, [f, g]), [R, j] = (0, a.useState)(false), [v, S] = (0, a.useState)(false), [P, A] = (0, a.useState)(.9 * s.D2), w = null === l;
    (0, a.useEffect)(() => {
      w && !R && (j(true), setTimeout(() => {
        S(true)
      }, 500))
    }, [w, j, R]), (0, a.useEffect)(() => {
      v && !w && j(false)
    }, [w, v]);
    let L = w || R,
      k = R ? null : l,
      [D, N] = (0, a.useState)(null),
      U = (0, a.useRef)(null),
      I = (0, a.useCallback)(() => {
        U.current = null, N(null)
      }, []),
      T = (0, a.useCallback)(e => {
        let t = D === U.current;
        e > 0 && ("earn" !== D || !t) && N("earn")
      }, [N, D]);
    return (0, n.jsx)(o.P3F, {
      onClick: L ? true : O,
      className: i()(d.clickable, {
        [d.disabled]: p
      }),
      id: null != r ? r : "balance-widget-pill",
      children: (0, n.jsxs)("span", {
        onMouseDown: y,
        onMouseEnter: p ? true : () => _(true),
        onMouseLeave: p ? true : () => _(false),
        ref: t,
        className: i()(d.container, E, C, {
          [d.containerLoading]: L,
          [d.inModalOverlay]: m,
          [d.disabled]: p
        }),
        children: [(0, n.jsx)("div", {
          className: i()(d.orbsLottieContainer, L ? d.orbIconloading : true),
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
            currentAnimationType: D,
            animationTypeRef: U,
            onSetAnimationDurationMS: A
          }))
        }), (0, n.jsx)(c.Z, {
          value: k,
          onValueChange: T,
          onValueReached: I,
          targetTotalCounterTime: P,
          className: L ? d.counterLoading : true
        }), h && (0, n.jsx)(b, {})]
      })
    })
  })