/** Chunk was on web.js **/
/** chunk id: 373826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g,
  f: () => h
}), require("./781311.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk194983 = require("./194983.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk251806 = require("./251806.js");

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

function p(e, t) {
  if (null == e) return {};
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e) {
  var {
    text: t,
    onClick: n,
    component: c
  } = e, d = p(e, ["text", "onClick", "component"]);
  let {
    themeType: _
  } = (0, o.z)(), m = "string" == typeof t ? t.trim() : t;
  if (null == m || "" === m) return null;
  let h = () => _ === s.l.MODAL || _ === s.l.MODAL_V2 ? (0, r.jsx)(c, f(u({
    color: "text-default"
  }, d), {
    children: m
  })) : (0, r.jsx)(c, f(u({
    color: "text-default"
  }, d), {
    children: (0, r.jsx)(i.Z, {
      children: m
    })
  }));
  return null != n ? (0, r.jsx)(a.P3F, {
    onClick: e => {
      e.stopPropagation(), n(e)
    },
    className: l.clickableText,
    children: h()
  }) : h()
}

function h(e) {
  return (0, r.jsx)(m, u({
    component: a.Heading
  }, e))
}

function g(e) {
  return (0, r.jsx)(m, u({
    component: a.Text
  }, e))
}