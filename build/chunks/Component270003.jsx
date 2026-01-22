/** Chunk was on web.js **/
/** chunk id: 270003, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => g
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk331322 = require("./331322.jsx"),
  Chunk834730 = require("./834730.jsx"),
  Chunk64584 = require("./64584.js"),
  Chunk182903 = require("./182903.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
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

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function g(e) {
  let {
    children: t,
    label: n,
    description: a
  } = e, d = h(e, ["children", "label", "description"]), {
    spacing: p
  } = i.useContext(c.c), m = i.useId(), g = null != a && "" !== a;
  return (0, r.jsxs)("fieldset", _(f({}, d), {
    className: s()(u.lI, d.className),
    "aria-describedby": g ? m : true,
    children: [null != n ? (0, r.jsx)(l.E, {
      tag: "legend",
      variant: "text-lg/medium",
      color: "text-strong",
      className: u.o1,
      children: n
    }) : null, g ? (0, r.jsx)(l.E, {
      variant: "text-sm/normal",
      color: "text-default",
      className: u.h_,
      id: m,
      children: a
    }) : null, (0, r.jsx)(o.B, {
      direction: "vertical",
      gap: p,
      children: t
    })]
  }))
}