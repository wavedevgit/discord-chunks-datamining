/** Chunk was on web.js **/
/** chunk id: 557711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk5192 = require("./5192.js"),
  Chunk829820 = require("./829820.js");

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
    activity: t,
    user: n,
    channelId: l,
    guildId: d,
    source: f,
    size: p = "sm",
    variant: _ = "secondary",
    onAction: m
  } = e, h = u(e, ["activity", "user", "channelId", "guildId", "source", "size", "variant", "onAction"]);
  let {
    tooltip: g,
    loading: E,
    disabled: b,
    onClick: y
  } = (0, s.Fe)(t, n, f, o.ZP.getNickname(d, l, n)), O = () => {
    null == m || m(), y()
  };
  return (0, r.jsx)(i.u, {
    text: g,
    children: (0, r.jsx)(a.hU, c({
      icon: a.iOO,
      size: p,
      variant: _,
      onClick: O,
      disabled: b,
      loading: E,
      "aria-label": null != g ? g : t.name
    }, h))
  })
}