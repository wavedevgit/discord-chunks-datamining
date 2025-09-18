/** Chunk was on web.js **/
/** chunk id: 257465, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => E,
  I: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk938288 = require("./938288.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk507274 = require("./507274.jsx"),
  Chunk667137 = require("./667137.js"),
  Chunk985316 = require("./985316.js"),
  Chunk525751 = require("./525751.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
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

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var E = function(e) {
  return e[e.ENTERING = 0] = "ENTERING", e[e.ENTERED = 1] = "ENTERED", e[e.EXITING = 2] = "EXITING", e[e.EXITED = 3] = "EXITED", e[e.HIDDEN = 4] = "HIDDEN", e
}({});

function b(e) {
  var t;
  let {
    transitionState: n,
    animationVariant: a = "default",
    size: p = "md",
    paddingSize: m = "sm",
    fullScreenOnMobile: E = true,
    returnRef: b,
    role: y = "dialog",
    "aria-label": O,
    dismissable: v = true,
    onClose: I,
    contentOutsideContainer: T,
    trackingProps: S,
    children: A
  } = e, C = i.useId(), N = i.useMemo(() => ({
    id: C,
    headingId: "heading-".concat(C),
    onClose: I,
    dismissable: v
  }), [v, C, I]), R = 0 === n || 1 === n, {
    reducedMotion: P
  } = i.useContext(c.Sfi), w = R || P.enabled || "subtle" === a ? "scale(1)" : "scale(0.9)", D = (0, c.q_F)({
    opacity: +!!R,
    transform: w,
    config: R ? f.jF : f.W$,
    delay: 64 * !!R
  }, "animate-always");
  return (0, r.jsx)(d.t.Provider, {
    value: N,
    children: (0, r.jsx)(u.V, g(h({
      id: C,
      role: y,
      "aria-label": O,
      "aria-labelledby": null != O ? true : N.headingId,
      returnRef: b
    }, S), {
      impressionType: null != (t = null == S ? true : S.impressionType) ? t : l.ImpressionTypes.MODAL,
      children: (0, r.jsx)(c.y5t, {
        forceLevel: 1,
        children: (0, r.jsxs)("div", {
          className: o()(_.outerContainer, {
            [_.fullScreenOnMobile]: E
          }),
          children: [T, (0, r.jsx)(s.animated.div, {
            "data-mana-component": "modal",
            className: o()(_.container, _["size-".concat(p)], _["padding-size-".concat(m)]),
            style: D,
            children: A
          })]
        })
      })
    }))
  })
}