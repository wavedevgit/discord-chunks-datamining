/** Chunk was on web.js **/
/** chunk id: 325780, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk483566 = require("./483566.jsx"),
  Chunk573830 = require("./573830.jsx");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = d(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function f(e) {
  var {
    checked: t,
    disabled: n,
    id: o,
    onChange: l,
    focusProps: d,
    hasIcon: f = false
  } = e, _ = u(e, ["checked", "disabled", "id", "onChange", "focusProps", "hasIcon"]);
  return (0, r.jsx)(i.g, c(s({}, _), {
    id: o,
    disabled: n,
    layout: "horizontal",
    interactiveLabel: true,
    auxiliaryContentPosition: "under-label",
    children: e => (0, r.jsx)(a.J, {
      focusProps: d,
      id: e.controlId,
      checked: t,
      disabled: n,
      onChange: l,
      hasIcon: f,
      describedBy: e.describedById,
      labelledBy: e.labelId
    })
  }))
}