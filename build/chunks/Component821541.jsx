/** Chunk was on web.js **/
/** chunk id: 821541, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk530892 = require("./530892.js"),
  l = require.n(Chunk530892),
  Chunk317112 = require("./317112.js");

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

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let m = Chunk473749.forwardRef(function(e, t) {
    var {
      as: n = "div",
      gap: i = 8,
      direction: a = "vertical",
      align: s = "stretch",
      justify: l = "start",
      wrap: u = false,
      padding: f = 0,
      fullWidth: h = true,
      style: m,
      className: b,
      children: y
    } = e, O = p(e, ["as", "gap", "direction", "align", "justify", "wrap", "padding", "fullWidth", "style", "className", "children"]);
    return (0, r.jsx)(n, _(d({
      ref: t,
      "data-align": s,
      "data-justify": l,
      "data-direction": a,
      "data-wrap": u,
      "data-full-width": h,
      className: o()(c.stack, b),
      style: d(_(d({}, m), {
        gap: g(i)
      }), E(f))
    }, O), {
      children: y
    }))
  }),
  g = e => "var(--space-".concat(e, ")"),
  E = e => "number" == typeof e || "string" == typeof e ? {
    padding: g(e)
  } : Object.entries(e).reduce((e, t) => {
    let [n, r] = t;
    return e["padding".concat(l()(n))] = g(r), e
  }, {})