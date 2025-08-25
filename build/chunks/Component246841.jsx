/** Chunk was on web.js **/
/** chunk id: 246841, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk829820 = require("./829820.js");

function a(e, t, n) {
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
      a(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  if (null == e) return {};
  var n, r, i = c(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function u(e) {
  var {
    activity: t,
    user: n,
    source: a,
    size: c = "sm",
    variant: u = "secondary",
    fullWidth: d,
    onAction: f
  } = e, _ = l(e, ["activity", "user", "source", "size", "variant", "fullWidth", "onAction"]);
  let {
    label: p,
    tooltip: h,
    loading: m,
    disabled: g,
    onClick: E
  } = (0, o.Ih)(t, n, a), b = () => {
    null == f || f(), E()
  };
  return (0, r.jsx)(i.ua7, {
    text: h,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, r.jsx)(i.zxk, s({
        variant: u,
        size: c,
        icon: i.bb,
        text: p,
        fullWidth: d,
        onClick: b,
        onMouseEnter: t,
        onMouseLeave: n,
        disabled: g,
        loading: m
      }, _))
    }
  })
}