/** Chunk was on web.js **/
/** chunk id: 600243, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk134632 = require("./134632.js"),
  Chunk481060 = require("./481060.js"),
  Chunk823379 = require("./823379.js");

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
  var {
    label: t
  } = e, n = c(e, ["label"]);
  switch (t) {
    case i.w.QUESTION:
      return (0, r.jsx)(a.Que, l({}, n));
    case i.w.EXCITED:
      return (0, r.jsx)(a.rIT, l({}, n));
    case i.w.RECOMMEND:
      return (0, r.jsx)(a.Vy8, l({}, n));
    case i.w.THINK:
      return (0, r.jsx)(a.WGR, l({}, n));
    case i.w.LOVE:
      return (0, r.jsx)(a.h_8, l({}, n));
    default:
      (0, o.vE)(t)
  }
}