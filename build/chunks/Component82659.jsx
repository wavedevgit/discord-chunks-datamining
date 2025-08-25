/** Chunk was on web.js **/
/** chunk id: 82659, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Modal: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk257465 = require("./257465.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk103866 = require("./103866.jsx"),
  Chunk213734 = require("./213734.jsx"),
  Chunk37148 = require("./37148.jsx");

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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function h(e) {
  var {
    size: t,
    title: n,
    subtitle: c,
    input: d,
    preview: p,
    actions: h,
    actionBarInput: m,
    listProps: g,
    children: E
  } = e, b = _(e, ["size", "title", "subtitle", "input", "preview", "actions", "actionBarInput", "listProps", "children"]);
  let y = null != t ? t : null != d || null != E || null != g ? "md" : "sm";
  return (0, r.jsxs)(i.I, f(u({}, b), {
    size: y,
    children: [(0, r.jsx)(l.x, {
      title: n,
      subtitle: c
    }), (0, r.jsx)(a.f, {
      controls: d,
      listProps: g,
      children: E
    }), (0, r.jsx)(s.m, {
      children: p
    }), (0, r.jsx)(o.G, {
      leading: m,
      actions: h,
      actionsFullWidth: null == m
    })]
  }))
}