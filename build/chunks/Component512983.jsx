/** Chunk was on web.js **/
/** chunk id: 512983, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => p,
  v: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk788877 = require("./788877.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var p = function(e) {
  return e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.LABEL = "label", e.LEGEND = "legend", e
}({});

function h(e) {
  let t;
  var {
    tag: n = "h5",
    children: i,
    className: l,
    faded: u,
    disabled: _,
    required: p = false,
    error: h,
    errorId: m
  } = e, g = f(e, ["tag", "children", "className", "faded", "disabled", "required", "error", "errorId"]);
  switch (n) {
    case "legend":
    case "label":
      t = n;
      break;
    default:
      t = a.H
  }
  return (0, r.jsxs)(t, d(c({
    className: o()(s[n], "h5" !== n ? s.defaultColor : null, l, {
      [s["defaultMargin".concat(n)]]: null == l,
      [s.faded]: u,
      [s.disabled]: _,
      [s.error]: null != h
    })
  }, g), {
    children: [i, p && null == h ? (0, r.jsx)("span", {
      className: s.required,
      children: "*"
    }) : null, null != h ? (0, r.jsxs)("span", {
      id: m,
      className: s.errorMessage,
      children: [null != i ? (0, r.jsx)("span", {
        className: s.errorSeparator,
        children: "-"
      }) : null, h]
    }) : null]
  }))
}