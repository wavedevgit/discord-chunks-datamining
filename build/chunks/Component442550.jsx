/** Chunk was on web.js **/
/** chunk id: 442550, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk89863 = require("./89863.js");

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

function m(e) {
  let {
    src: t,
    size: n,
    constrain: o = "height",
    className: f,
    alt: p,
    fallbackSrc: m,
    "aria-hidden": g,
    showTooltip: E = false
  } = e, b = (0, c.ZP)(), y = "".concat(n, "px"), [O, v] = i.useState(false), [I, T] = i.useState(false), S = null == m || I;
  if (null == t || O && S) return (0, r.jsx)(l.IMN, {
    size: "custom",
    width: "100%",
    height: "100%",
    color: (0, s.wj)(b) ? l.TVs.colors.WHITE : l.TVs.colors.BLACK,
    style: {
      maxWidth: y
    },
    className: a()(d.contentImage, f)
  });
  let A = "height" === o ? {
    maxWidth: y,
    height: y
  } : {
    maxWidth: y,
    minHeight: y
  };
  return (0, r.jsx)(l.ua7, {
    "aria-label": p,
    text: p,
    shouldShow: E,
    children: e => (0, r.jsx)("img", h(_({}, e), {
      style: A,
      className: a()(d.contentImage, f),
      src: O && null != m ? m : t,
      "aria-hidden": g,
      alt: null != p ? p : g ? true : u.intl.string(u.t["2B/phI"]),
      onError: e => O ? T(true) : v(true)
    }))
  }, "content-image")
}