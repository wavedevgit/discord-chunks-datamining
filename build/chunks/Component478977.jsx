/** Chunk was on web.js **/
/** chunk id: 478977, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk301188 = require("./301188.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = function(e) {
  let {
    colorKey: t,
    value: n,
    onChange: l,
    title: u
  } = e, f = i.useRef(null);
  return (0, r.jsxs)(a.xJW, {
    children: [(0, r.jsx)(a.vwX, {
      tag: a.RB0.H5,
      children: u
    }), (0, r.jsx)(a.yRy, {
      targetElementRef: f,
      renderPopout: e => (0, r.jsx)(a.Z$W, d(c({}, e), {
        value: n,
        onChange: e => l(t, (0, o.Rf)(e))
      })),
      children: e => (0, r.jsx)(a.P3F, d(c({}, e), {
        innerRef: f,
        tag: "span",
        "aria-label": "Select a color",
        className: s.swatchContainer,
        style: {
          backgroundColor: n
        },
        children: (0, r.jsx)(a.ilE, {
          size: "xs",
          color: "currentColor",
          className: s.swatchIcon
        })
      }))
    })]
  })
}