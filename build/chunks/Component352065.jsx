/** Chunk was on web.js **/
/** chunk id: 352065, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk853590 = require("./853590.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk984802 = require("./984802.js"),
  Chunk725419 = require("./725419.js"),
  Chunk51766 = require("./51766.js");

function _(e, t, n) {
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

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  var t;
  let {
    transitionState: n,
    animationVariant: a = "default",
    returnRef: _,
    "aria-label": h,
    onClose: E,
    trackingProps: b,
    children: y
  } = e, O = i.useId(), v = i.useMemo(() => ({
    id: O,
    headingId: "heading-".concat(O),
    onClose: E,
    dismissable: true
  }), [O, E]), S = (0, d.Ll)(), {
    theme: I
  } = (0, u.TCT)(), T = (0, c.hvB)(n, a);
  return (0, r.jsx)(c.tCf.Provider, {
    value: v,
    children: (0, r.jsx)(u.VqE, g(m({
      id: O,
      role: "dialog",
      "aria-label": h,
      "aria-labelledby": null != h ? true : v.headingId,
      returnRef: _
    }, b), {
      impressionType: null != (t = null == b ? true : b.impressionType) ? t : l.ImpressionTypes.MODAL,
      children: (0, r.jsx)(c.y5t, {
        forceLevel: 1,
        children: (0, r.jsx)("div", {
          className: f.outerContainer,
          children: (0, r.jsx)(u.f6W, {
            theme: S,
            children: e => (0, r.jsx)(s.animated.div, {
              "data-mana-component": "layer-modal",
              className: o()(p.container, f.modal, e),
              style: T,
              children: (0, r.jsx)("div", {
                className: f.modalContent,
                children: (0, r.jsx)(u.f6W, {
                  theme: I,
                  children: e => (0, r.jsx)("div", {
                    className: o()(e, f.modalContentInner),
                    children: y
                  })
                })
              })
            })
          })
        })
      })
    }))
  })
}