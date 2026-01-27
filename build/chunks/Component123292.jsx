/** Chunk was on web.js **/
/** chunk id: 123292, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk426333 = require("./426333.js"),
  Chunk834730 = require("./834730.jsx"),
  Chunk726770 = require("./726770.js");

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
    focusProps: t,
    lineClamp: n = 1,
    role: i = "button",
    text: c,
    textVariant: d = "text-md/medium",
    type: _ = "button",
    variant: h = "primary",
    buttonRef: m,
    className: g,
    style: E
  } = e, y = p(e, ["focusProps", "lineClamp", "role", "text", "textVariant", "type", "variant", "buttonRef", "className", "style"]);
  return (0, r.jsx)(o.vN, f(u({}, t), {
    children: (0, r.jsx)("button", f(u({
      className: a()(l.textButton, l[h]),
      "data-mana-component": "text-button",
      role: i,
      type: _,
      ref: m
    }, y), {
      children: (0, r.jsx)(s.E, {
        tag: "span",
        variant: d,
        color: "none",
        lineClamp: n,
        className: l.text,
        children: c
      })
    }))
  }))
}