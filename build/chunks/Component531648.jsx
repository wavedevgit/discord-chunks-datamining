/** Chunk was on web.js **/
/** chunk id: 531648, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g,
  Q: () => m
}), require("./733351.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk3026 = require("./3026.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk996988 = require("./996988.js"),
  Chunk380297 = require("./380297.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = _(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function h(e) {
  let {
    text: t,
    onClick: n,
    component: c
  } = e, d = p(e, ["text", "onClick", "component"]), {
    themeType: _
  } = (0, o.E)(), h = "string" == typeof t ? t.trim() : t;
  if (null == h || "" === h) return null;
  let m = () => _ === s.d.MODAL || _ === s.d.MODAL_V2 ? (0, r.jsx)(c, f(u({
    color: "text-default"
  }, d), {
    children: h
  })) : (0, r.jsx)(c, f(u({
    color: "text-default"
  }, d), {
    children: (0, r.jsx)(i.A, {
      children: h
    })
  }));
  return null != n ? (0, r.jsx)(a.DUT, {
    onClick: e => {
      e.stopPropagation(), n(e)
    },
    className: l.sd,
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