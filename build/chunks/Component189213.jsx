/** Chunk was on web.js **/
/** chunk id: 189213, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Modal: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk224640 = require("./224640.jsx"),
  Chunk696208 = require("./696208.jsx"),
  Chunk430993 = require("./430993.jsx"),
  Chunk364840 = require("./364840.jsx"),
  Chunk20742 = require("./20742.jsx"),
  Chunk655053 = require("./655053.jsx");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = h(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function m(e) {
  let {
    size: t,
    title: n,
    subtitle: u,
    input: f,
    preview: h,
    actions: m,
    actionBarInput: g,
    actionBarInputLayout: E = "default",
    listProps: b,
    notice: y,
    onScroll: O,
    scrollerRef: A,
    children: v
  } = e, S = _(e, ["size", "title", "subtitle", "input", "preview", "actions", "actionBarInput", "actionBarInputLayout", "listProps", "notice", "onScroll", "scrollerRef", "children"]), I = null != t ? t : null != f || null != g || (0, s.y)(v) || null != b ? "md" : "sm";
  return (0, r.jsxs)(i.d, p(d({}, S), {
    size: I,
    children: [(0, r.jsx)(l.rQ, {
      title: n,
      subtitle: u
    }), (0, r.jsx)(c.i, {
      message: null == y ? true : y.message,
      type: null == y ? true : y.type
    }), (0, r.jsx)(s.c, {
      controls: f,
      listProps: b,
      onScroll: O,
      scrollerRef: A,
      children: v
    }), (0, r.jsx)(o.j, {
      children: h
    }), (0, r.jsx)(a.H, {
      leading: g,
      leadingLayout: E,
      actions: m,
      actionsFullWidth: null == g
    })]
  }))
}