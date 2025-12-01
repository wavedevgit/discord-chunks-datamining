/** Chunk was on web.js **/
/** chunk id: 775086, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Modal: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk987153 = require("./987153.jsx"),
  Chunk144771 = require("./144771.jsx"),
  Chunk166935 = require("./166935.jsx"),
  Chunk383074 = require("./383074.jsx"),
  Chunk575118 = require("./575118.jsx");

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
    size: t,
    title: n,
    subtitle: c,
    input: d,
    preview: _,
    actions: m,
    actionBarInput: h,
    actionBarInputLayout: g = "default",
    listProps: E,
    children: b
  } = e, y = p(e, ["size", "title", "subtitle", "input", "preview", "actions", "actionBarInput", "actionBarInputLayout", "listProps", "children"]);
  let O = null != t ? t : null != d || null != b || null != E ? "md" : "sm";
  return (0, r.jsxs)(i.I, f(u({}, y), {
    size: O,
    children: [(0, r.jsx)(l.x, {
      title: n,
      subtitle: c
    }), (0, r.jsx)(o.f, {
      controls: d,
      listProps: E,
      children: b
    }), (0, r.jsx)(s.m, {
      children: _
    }), (0, r.jsx)(a.G, {
      leading: h,
      leadingLayout: g,
      actions: m,
      actionsFullWidth: null == h
    })]
  }))
}