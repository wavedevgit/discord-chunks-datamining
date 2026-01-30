/** Chunk was on web.js **/
/** chunk id: 224640, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => b,
  i: () => _.i
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk864605 = require("./864605.js"),
  Chunk110259 = require("./110259.js"),
  Chunk113325 = require("./113325.jsx"),
  Chunk426333 = require("./426333.js"),
  Chunk707554 = require("./707554.jsx"),
  Chunk22856 = require("./22856.js"),
  Chunk150591 = require("./150591.js"),
  Chunk815390 = require("./815390.js"),
  Chunk22789 = require("./22789.js");

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

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  var t;
  let {
    transitionState: n,
    animationVariant: a = "default",
    size: _ = "md",
    paddingSize: m = "sm",
    fullScreenOnMobile: E = true,
    returnRef: b,
    role: O = "dialog",
    "aria-label": v,
    dismissable: A = true,
    onClose: I,
    contentOutsideContainer: S,
    trackingProps: T,
    children: C
  } = e, N = i.useId(), w = i.useMemo(() => ({
    id: N,
    headingId: "heading-".concat(N),
    onClose: I,
    dismissable: A
  }), [A, N, I]), R = (0, p.kS)(n, a), P = i.useRef(null);
  return (0, r.jsx)(f.V.Provider, {
    value: w,
    children: (0, r.jsx)(c.l, {
      id: N,
      role: O,
      "aria-label": v,
      "aria-labelledby": null != v ? true : w.headingId,
      returnRef: b,
      trackingProps: y(g({}, T), {
        impressionType: null != (t = null == T ? true : T.impressionType) ? t : l.ImpressionTypes.MODAL
      }),
      children: (0, r.jsx)(u.xp, {
        containerRef: P,
        children: (0, r.jsx)(d.F, {
          forceLevel: 1,
          children: (0, r.jsxs)("div", {
            ref: P,
            className: o()(h.outerContainer, {
              [h.fullScreenOnMobile]: E
            }),
            children: [S, (0, r.jsx)(s.animated.div, {
              "data-mana-component": "modal",
              className: o()(h.container, h["size-".concat(_)], h["padding-size-".concat(m)]),
              style: R,
              children: C
            })]
          })
        })
      })
    })
  })
}