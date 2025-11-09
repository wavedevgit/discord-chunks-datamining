/** Chunk was on web.js **/
/** chunk id: 373826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g,
  f: () => m
}), require("./781311.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk194983 = require("./194983.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk663907 = require("./663907.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function h(e) {
  var {
    text: t,
    onClick: n,
    component: c
  } = e, d = _(e, ["text", "onClick", "component"]);
  let {
    themeType: p
  } = (0, o.z)(), h = "string" == typeof t ? t.trim() : t;
  if (null == h || "" === h) return null;
  let m = () => p === s.l.MODAL || p === s.l.MODAL_V2 ? (0, r.jsx)(c, f(u({
    color: "text-default"
  }, d), {
    children: h
  })) : (0, r.jsx)(c, f(u({
    color: "text-default"
  }, d), {
    children: (0, r.jsx)(i.Z, {
      children: h
    })
  }));
  return null != n ? (0, r.jsx)(a.P3F, {
    onClick: e => {
      e.stopPropagation(), n(e)
    },
    className: l.clickableText,
    children: m()
  }) : m()
}

function m(e) {
  return (0, r.jsx)(h, u({
    component: a.Heading
  }, e))
}

function g(e) {
  return (0, r.jsx)(h, u({
    component: a.Text
  }, e))
}