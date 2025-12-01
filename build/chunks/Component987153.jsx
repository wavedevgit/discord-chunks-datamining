/** Chunk was on web.js **/
/** chunk id: 987153, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => Chunk219855.D,
  I: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk666917 = require("./666917.js"),
  Chunk990547 = require("./990547.js"),
  Chunk974955 = require("./974955.jsx"),
  Chunk200269 = require("./200269.jsx"),
  Chunk624653 = require("./624653.js"),
  Chunk635146 = require("./635146.js"),
  Chunk219855 = require("./219855.js"),
  Chunk325380 = require("./325380.js");

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

function b(e) {
  var t;
  let {
    transitionState: n,
    animationVariant: a = "default",
    size: _ = "md",
    paddingSize: h = "sm",
    fullScreenOnMobile: g = true,
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
  }), [v, C, I]), R = (0, f.hv)(n, a);
  return (0, r.jsx)(d.t.Provider, {
    value: N,
    children: (0, r.jsx)(c.V, {
      id: C,
      role: y,
      "aria-label": O,
      "aria-labelledby": null != O ? true : N.headingId,
      returnRef: b,
      trackingProps: E(m({}, S), {
        impressionType: null != (t = null == S ? true : S.impressionType) ? t : l.ImpressionTypes.MODAL
      }),
      children: (0, r.jsx)(u.y, {
        forceLevel: 1,
        children: (0, r.jsxs)("div", {
          className: o()(p.outerContainer, {
            [p.fullScreenOnMobile]: g
          }),
          children: [T, (0, r.jsx)(s.animated.div, {
            "data-mana-component": "modal",
            className: o()(p.container, p["size-".concat(_)], p["padding-size-".concat(h)]),
            style: R,
            children: A
          })]
        })
      })
    })
  })
}