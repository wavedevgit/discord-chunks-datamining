/** Chunk was on web.js **/
/** chunk id: 732380, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O1: () => f,
  Q1: () => d,
  pt: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = u(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function d(e) {
  let {
    action: t,
    onClick: n
  } = e, {
    trackUserProfileAction: r
  } = (0, o.KZ)();
  return e => {
    null != t && r({
      action: t
    }), null == n || n(e)
  }
}

function f(e) {
  var {
    action: t,
    onClick: n,
    variant: i = "secondary",
    size: o = "sm"
  } = e, s = c(e, ["action", "onClick", "variant", "size"]);
  let u = d({
    action: t,
    onClick: n
  });
  return (0, r.jsx)(a.zxk, l({
    onClick: u,
    variant: i,
    size: o
  }, s))
}

function _(e) {
  var {
    action: t,
    onClick: n,
    variant: o = "secondary",
    size: s = "sm",
    tooltipText: u,
    "aria-label": f
  } = e, _ = c(e, ["action", "onClick", "variant", "size", "tooltipText", "aria-label"]);
  let p = d({
    action: t,
    onClick: n
  });
  return (0, r.jsx)(i.u, {
    text: u,
    children: (0, r.jsx)(a.hU, l({
      onClick: p,
      variant: o,
      size: s,
      "aria-label": null != f ? f : u
    }, _))
  })
}