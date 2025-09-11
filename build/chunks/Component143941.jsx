/** Chunk was on web.js **/
/** chunk id: 143941, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk607550 = require("./607550.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk820657 = require("./820657.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = e => {
  let {
    skuId: t,
    className: n
  } = e, a = (0, c.ny)(t), f = i.useRef(null), p = a ? u.intl.string(u.t.yr9TTU) : u.intl.string(u.t["8DkMER"]), m = (0, l.Z)(f), g = a ? s.h_8 : s.Pzh, E = a || m ? d.wishlistedOrHoveredIconColor : d.normalIconColor, b = i.useCallback(e => {
    e.stopPropagation(), a ? (0, c.yj)(t) : (0, c.iI)(t)
  }, [a, t]);
  return (0, r.jsx)(s.ua7, {
    text: p,
    children: e => (0, r.jsx)(s.P3F, h(_({}, e), {
      className: o()(n, d.wishlistButton),
      innerRef: f,
      onClick: b,
      "aria-label": p,
      children: (0, r.jsx)(g, {
        colorClass: E,
        size: "custom",
        height: 20,
        width: 20
      })
    }))
  })
}