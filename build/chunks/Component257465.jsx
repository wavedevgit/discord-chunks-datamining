/** Chunk was on web.js **/
/** chunk id: 257465, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => b,
  I: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk938288 = require("./938288.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk143450 = require("./143450.js"),
  Chunk507274 = require("./507274.jsx"),
  Chunk667137 = require("./667137.js"),
  Chunk985316 = require("./985316.js"),
  Chunk525751 = require("./525751.js");

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
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var b = function(e) {
  return e[e.ENTERING = 0] = "ENTERING", e[e.ENTERED = 1] = "ENTERED", e[e.EXITING = 2] = "EXITING", e[e.EXITED = 3] = "EXITED", e[e.HIDDEN = 4] = "HIDDEN", e
}({});

function y(e) {
  var t;
  let {
    transitionState: n,
    animationVariant: a = "default",
    size: h = "md",
    paddingSize: g = "sm",
    fullScreenOnMobile: b = true,
    returnRef: y,
    role: O = "dialog",
    "aria-label": v,
    dismissable: I = true,
    onClose: T,
    contentOutsideContainer: S,
    trackingProps: A,
    children: C
  } = e, N = i.useId(), R = i.useMemo(() => ({
    id: N,
    headingId: "heading-".concat(N),
    onClose: T,
    dismissable: I
  }), [I, N, T]), P = 0 === n || 1 === n, {
    reducedMotion: w
  } = i.useContext(c.Sfi), D = P || w.enabled || "subtle" === a ? "scale(1)" : "scale(0.9)", x = (0, u.q)({
    opacity: +!!P,
    transform: D,
    config: P ? _.jF : _.W$,
    delay: 64 * !!P
  }, "animate-always");
  return (0, r.jsx)(f.t.Provider, {
    value: R,
    children: (0, r.jsx)(d.V, E(m({
      id: N,
      role: O,
      "aria-label": v,
      "aria-labelledby": null != v ? true : R.headingId,
      returnRef: y
    }, A), {
      impressionType: null != (t = null == A ? true : A.impressionType) ? t : l.ImpressionTypes.MODAL,
      children: (0, r.jsx)(c.y5t, {
        forceLevel: 1,
        children: (0, r.jsxs)("div", {
          className: o()(p.outerContainer, {
            [p.fullScreenOnMobile]: b
          }),
          children: [S, (0, r.jsx)(s.animated.div, {
            "data-mana-component": "modal",
            className: o()(p.container, p["size-".concat(h)], p["padding-size-".concat(g)]),
            style: x,
            children: C
          })]
        })
      })
    }))
  })
}