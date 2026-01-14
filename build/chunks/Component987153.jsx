/** Chunk was on web.js **/
/** chunk id: 987153, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => _.D,
  I: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk853590 = require("./853590.js"),
  Chunk990547 = require("./990547.js"),
  Chunk974955 = require("./974955.jsx"),
  Chunk155127 = require("./155127.js"),
  Chunk200269 = require("./200269.jsx"),
  Chunk624653 = require("./624653.js"),
  Chunk635146 = require("./635146.js"),
  Chunk219855 = require("./219855.js"),
  Chunk51766 = require("./51766.js");

function h(e, t, n) {
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
      h(e, t, n[t])
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

function y(e) {
  var t;
  let {
    transitionState: n,
    animationVariant: a = "default",
    size: _ = "md",
    paddingSize: h = "sm",
    fullScreenOnMobile: E = true,
    returnRef: y,
    role: O = "dialog",
    "aria-label": v,
    dismissable: S = true,
    onClose: I,
    contentOutsideContainer: T,
    trackingProps: C,
    children: A
  } = e, N = i.useId(), P = i.useMemo(() => ({
    id: N,
    headingId: "heading-".concat(N),
    onClose: I,
    dismissable: S
  }), [S, N, I]), R = (0, p.hv)(n, a), w = i.useRef(null);
  return (0, r.jsx)(f.t.Provider, {
    value: P,
    children: (0, r.jsx)(c.V, {
      id: N,
      role: O,
      "aria-label": v,
      "aria-labelledby": null != v ? true : P.headingId,
      returnRef: y,
      trackingProps: b(g({}, C), {
        impressionType: null != (t = null == C ? true : C.impressionType) ? t : l.ImpressionTypes.MODAL
      }),
      children: (0, r.jsx)(u.Jc, {
        containerRef: w,
        children: (0, r.jsx)(d.y, {
          forceLevel: 1,
          children: (0, r.jsxs)("div", {
            ref: w,
            className: o()(m.outerContainer, {
              [m.fullScreenOnMobile]: E
            }),
            children: [T, (0, r.jsx)(s.animated.div, {
              "data-mana-component": "modal",
              className: o()(m.container, m["size-".concat(_)], m["padding-size-".concat(h)]),
              style: R,
              children: A
            })]
          })
        })
      })
    })
  })
}