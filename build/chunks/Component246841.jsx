/** Chunk was on web.js **/
/** chunk id: 246841, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk829820 = require("./829820.js");

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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function d(e) {
  var {
    activity: t,
    user: n,
    source: s,
    size: u = "sm",
    variant: d = "secondary",
    fullWidth: f,
    onAction: p
  } = e, _ = c(e, ["activity", "user", "source", "size", "variant", "fullWidth", "onAction"]);
  let {
    label: m,
    tooltip: h,
    loading: g,
    disabled: E,
    onClick: b
  } = (0, a.Ih)(t, n, s), y = () => {
    null == p || p(), b()
  };
  return (0, r.jsx)(i.u, {
    text: h,
    children: (0, r.jsx)(o.Button, l({
      variant: d,
      size: u,
      icon: o.bb,
      text: m,
      fullWidth: f,
      onClick: y,
      disabled: E,
      loading: g
    }, _))
  })
}