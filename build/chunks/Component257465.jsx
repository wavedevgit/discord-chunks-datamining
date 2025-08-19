/** Chunk was on web.js **/
/** chunk id: 257465, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => y,
  I: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk803948 = require("./803948.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk143450 = require("./143450.js"),
  Chunk186325 = require("./186325.js"),
  Chunk507274 = require("./507274.jsx"),
  Chunk667137 = require("./667137.js"),
  Chunk985316 = require("./985316.js"),
  Chunk525751 = require("./525751.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var y = function(e) {
  return e[e.ENTERING = 0] = "ENTERING", e[e.ENTERED = 1] = "ENTERED", e[e.EXITING = 2] = "EXITING", e[e.EXITED = 3] = "EXITED", e[e.HIDDEN = 4] = "HIDDEN", e
}({});

function O(e) {
  var t;
  let {
    transitionState: n,
    animationVariant: a = "default",
    size: m = "md",
    paddingSize: E = "sm",
    fullScreenOnMobile: y = true,
    returnRef: O,
    role: v = "dialog",
    "aria-label": I,
    onClose: T,
    contentOutsideContainer: S,
    trackingProps: A,
    children: N
  } = e, C = i.useId(), R = i.useMemo(() => ({
    id: C,
    headingId: "heading-".concat(C),
    onClose: T
  }), [C, T]), P = 0 === n || 1 === n, {
    reducedMotion: w
  } = i.useContext(d.S), D = P || w.enabled || "subtle" === a ? "scale(1)" : "scale(0.9)", L = (0, u.q)({
    opacity: +!!P,
    transform: D,
    config: P ? p.jF : p.W$,
    delay: 64 * !!P
  }, "animate-always");
  return (0, r.jsx)(_.t.Provider, {
    value: R,
    children: (0, r.jsx)(f.V, b(g({
      id: C,
      role: v,
      "aria-label": I,
      "aria-labelledby": null != I ? true : R.headingId,
      returnRef: O
    }, A), {
      impressionType: null != (t = null == A ? true : A.impressionType) ? t : l.ImpressionTypes.MODAL,
      children: (0, r.jsx)(c.y5, {
        forceLevel: 1,
        children: (0, r.jsxs)("div", {
          className: o()(h.outerContainer, {
            [h.fullScreenOnMobile]: y
          }),
          children: [S, (0, r.jsx)(s.animated.div, {
            "data-mana-component": "modal",
            className: o()(h.container, h["size-".concat(m)], h["padding-size-".concat(E)]),
            style: L,
            children: N
          })]
        })
      })
    }))
  })
}