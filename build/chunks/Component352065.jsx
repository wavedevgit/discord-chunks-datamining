/** Chunk was on web.js **/
/** chunk id: 352065, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk488290 = require("./488290.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk507274 = require("./507274.jsx"),
  Chunk667137 = require("./667137.js"),
  Chunk985316 = require("./985316.js"),
  Chunk163838 = require("./163838.js"),
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

function b(e) {
  var t;
  let {
    transitionState: n,
    animationVariant: a = "default",
    returnRef: h,
    "aria-label": g,
    onClose: b,
    trackingProps: y,
    children: O
  } = e, v = i.useId(), I = i.useMemo(() => ({
    id: v,
    headingId: "heading-".concat(v),
    onClose: b,
    dismissable: true
  }), [v, b]), T = (0, f.hv)(n, a);
  return (0, r.jsx)(d.t.Provider, {
    value: I,
    children: (0, r.jsx)(u.V, E(m({
      id: v,
      role: "dialog",
      "aria-label": g,
      "aria-labelledby": null != g ? true : I.headingId,
      returnRef: h
    }, y), {
      impressionType: null != (t = null == y ? true : y.impressionType) ? t : l.ImpressionTypes.MODAL,
      children: (0, r.jsx)(c.y5t, {
        forceLevel: 1,
        children: (0, r.jsx)("div", {
          className: _.outerContainer,
          children: (0, r.jsx)(s.animated.div, {
            "data-mana-component": "layer-modal",
            className: o()(p.container, _.modal),
            style: T,
            children: (0, r.jsx)("div", {
              className: _.modalContent,
              children: O
            })
          })
        })
      })
    }))
  })
}