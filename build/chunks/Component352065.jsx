/** Chunk was on web.js **/
/** chunk id: 352065, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk137317 = require("./137317.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk507274 = require("./507274.jsx"),
  Chunk163838 = require("./163838.js"),
  Chunk325380 = require("./325380.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  var t;
  let {
    transitionState: n,
    animationVariant: a = "default",
    returnRef: _,
    "aria-label": h,
    onClose: g,
    trackingProps: E,
    children: b
  } = e, y = i.useId(), O = i.useMemo(() => ({
    id: y,
    headingId: "heading-".concat(y),
    onClose: g,
    dismissable: true
  }), [y, g]), v = (0, c.hvB)(n, a);
  return (0, r.jsx)(c.tCf.Provider, {
    value: O,
    children: (0, r.jsx)(u.V, m(p({
      id: y,
      role: "dialog",
      "aria-label": h,
      "aria-labelledby": null != h ? true : O.headingId,
      returnRef: _
    }, E), {
      impressionType: null != (t = null == E ? true : E.impressionType) ? t : l.ImpressionTypes.MODAL,
      children: (0, r.jsx)(c.y5t, {
        forceLevel: 1,
        children: (0, r.jsx)("div", {
          className: d.outerContainer,
          children: (0, r.jsx)(s.animated.div, {
            "data-mana-component": "layer-modal",
            className: o()(f.container, d.modal),
            style: v,
            children: (0, r.jsx)("div", {
              className: d.modalContent,
              children: b
            })
          })
        })
      })
    }))
  })
}